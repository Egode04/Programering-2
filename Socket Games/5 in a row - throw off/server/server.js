const http = require('http')
const express = require('express')
const socket = require('socket.io')
const randomColor = require('randomcolor')
const createBoard = require('./create-board')
const createCooldown = require('./create-cooldown')

const app = express()

app.use(express.static(`${__dirname}/../client`))

const server = http.createServer(app)
const io = socket(server)
const { clear, getBoard, makeTurn } = createBoard(20)

io.on('connection', socket => {
    const color = randomColor()
    const cooldown = createCooldown(2000)
    socket.emit('board', getBoard())

    socket.on('message', string => io.emit('message', string))
    socket.on('turn', ({ x, y }) => {
        if (cooldown()) {
            const playerWon = makeTurn(x, y, color)
            io.emit('turn', { x, y, color })
    
            if (playerWon) {
                socket.emit('message', 'You Won!')
                io.emit('message', 'New Round')
                clear()
                io.emit('board')
            }
        }
    })
})

server.on('error', err => {
    console.error(err)
})

server.listen(8080, () => {
    console.log('server is ready')
})