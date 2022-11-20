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

// variables
const users = []
const queue = []
const inGame = []

// create new connection
io.on('connection', socket => {
    console.log(`User ${socket.id} connected`)

    socket.on('disconnected', () => {
        // console.log(`User ${socket.id} disconnected`)
        users[socket.id] = null
    })

    // socket.on('msg', msg => {
    //     console.log(`Client: ${msg}`)
    // })
    
    socket.on('button', key => {
        console.log(key)
    })

    socket.on('new user', (user, id) => {
        users[id] = user
        console.log(users)

        queue.push(id)
    })

    // emit
    socket.emit('server', "Connected to Server")
})

http.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

const interval = setInterval(() => {
    // change "if & while" to change queue time
    if (Object.keys(queue).length >= 2) {
        // send '2 first' users to 'game'
        inGame.push([ queue[0], queue[1] ])
        // remove '2 first' users from 'queue'
        for (i = 0; i < 2; i++) queue.splice(0, 1)
    }
    if (queue.length < 1)
        console.log('Queue is empty')
    else
        console.log('Game Queue: ')
        queue.forEach((user, index) => {
            console.log(`   User ${index+1}: ${users[user]}`)
        })

    if (inGame.length < 1)
        console.log('No Game Lobbies Found')
    else
        console.log('Game Lobbies: ')
        inGame.forEach((lobby, index) => {
            console.log(`   Lobby ${index+1}: [ ${users[inGame[index][0]]}, ${users[inGame[index][1]]} ]`)
        })
    // Remove when done testing
    clearInterval(interval)
}, 30 * 1000)