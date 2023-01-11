const http = require('http')
const express = require('express')
const socket = require('socket.io')

const app = express()

app.use(express.static(`${__dirname}/../client`))

const server = http.createServer(app)
const io = socket(server)

const users = []

io.on('connection', socket => {
    console.log(`New client connected: ${socket.id}`)

    users.push(socket)

    socket.on('connected', () => socket.emit('message', 'You have connected!'))
    socket.on('disconnect', () => users.splice(users.indexOf(socket), 1))
    socket.on('message', string => io.emit('message', string))
    socket.on('users', () => console.log(`User count: ${users.length}`))
})

server.on('error', err => {
    console.error(err)
})

server.listen(8080, () => {
    console.log(`Server listening on port ${8080}`)
})