function log(text) {
    const parent = document.querySelector('#events')
    const element = document.createElement('li')
    element.innerHTML = text

    parent.appendChild(element)
    parent.scrollTop = parent.scrollHeight
}

function onChatSubmitted(event) {
    event.preventDefault()

    const input = document.querySelector('#chat')
    const text = input.value
    input.value = ''

    socket.emit('message', text)
}

function getClickCoords(element, event) {
    const { top, left } = element.getBoundingClientRect()
    const { clientX, clientY } = event

    return {
        x: clientX - left,
        y: clientY - top
    }
}

function getBoard(canvas, numCells = 20) {
    const ctx = canvas.getContext('2d')
    const cellSize = Math.floor(canvas.width/numCells)

    function fillCell(x, y, color) {
        const width = 20
        const height = width
        ctx.fillStyle = color;
        ctx.fillRect(
            x*cellSize,
            y*cellSize,
            cellSize,
            cellSize
        )
    }

    function drawGrid() {
        ctx.strokeStyle = '#777'
        ctx.beginPath()
            for (let i = 0; i < numCells+1; i++) {
                ctx.moveTo(i*cellSize, 0)
                ctx.lineTo(i*cellSize, cellSize*numCells)
                ctx.moveTo(0, i*cellSize)
                ctx.lineTo(cellSize*numCells, i*cellSize)
            }
        ctx.stroke()
    }

    function clear() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    function renderBoard(board = []) {
        board.forEach((row, y) => {
            row.forEach((color, x) => {
                color && fillCell(x, y, color)
            })  
        })
    }

    function reset(board) {
        clear()
        drawGrid()
        renderBoard(board)
    }

    function getCellCoords(x, y) {
        return {
            x: Math.floor(x/cellSize),
            y: Math.floor(y/cellSize)
        }
    }

    return { fillCell, reset, getCellCoords }
}

function init() {
    const canvas = document.querySelector('canvas')
    const { fillCell, reset, getCellCoords } = getBoard(canvas)

    canvas.width = 400
    canvas.height = canvas.width

    function onClick(event) {
        const { x, y } = getClickCoords(canvas, event)
        socket.emit('turn', getCellCoords(x, y))
    }

    socket.on('board', reset)
    socket.on('message', log)
    socket.on('turn', ({ x, y, color }) => fillCell(x, y, color))

    document
        .querySelector('#chat-form')
        .addEventListener('submit', onChatSubmitted)
    canvas.addEventListener('click', onClick)
} const socket = io(); init()