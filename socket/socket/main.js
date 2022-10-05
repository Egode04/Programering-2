const express = require('express')
const { Socket } = require('socket.io')
const app = express()
const path = require('path')

const http = require('http').Server(app)
const port = process.env.PORT || 8080

// attached http server to the socket.io
const io = require('socket.io')(http)

// serve static files
app.use(express.static('src'))

// route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'))
})

// create new connection
io.on('connection', socket => {
    console.log(`User ${socket.id} connected`)

    socket.on('disconnected', () => {
        console.log(`User ${socket.id} disconnected`)
    })

    socket.on('msg', msg => {
        console.log(`Client: ${msg}`)
    })

    // emit
    socket.emit('server', "Connected to Server")
    socket.emit('click', (msg) => {console.log(msg)})
})

http.listen(port, () => {
    console.log(`App listening on port ${port}`)
})