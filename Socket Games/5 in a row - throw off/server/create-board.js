function createBoard(size) {
    let board

    function clear() {
        board = Array(size).fill().map(() => Array(size).fill(null))
    }

    function getBoard() {
        return board
    }

    function makeTurn(x, y, color) {
        board[y][x] = color
        return isWinningTurn(x, y)
    }

    function inBounds(x, y) {
        return y >= 0 && y < board.length && x >= 0 && x < board[y].length
    }

    function numMatches(x, y, dx, dy) {
        let i = 1
        while(
            inBounds(x + i*dx, y + i*dy) &&
            board[y + i*dy][x + i*dx] === board[y][x]
        ) i++
        return i - 1
    }

    function isWinningTurn(x, y) {
        for(let dx = -1; dx < 2; dx++) {
            for (let dy = -1; dy <2; dy++) {
                if (dx === 0 && dy === 0) continue
                
                const count = numMatches(x, y, dx, dy) + numMatches(x, y, -dx, -dy) + 1
    
                if (count >= 5) return true
            }
        }

        return false
    }

    clear()

    return { clear, getBoard, makeTurn }
}

module.exports = createBoard