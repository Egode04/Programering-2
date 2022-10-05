setInterval(() => {
    gamePieces.forEach((piece, playerIndex) => {
        buttons = [37, 38, 39, 40]
        randomButton = buttons[Math.random()*4 | 0]
        for (i = 0; i < Math.floor(Math.random()*5+1); i++)
        socket.emit('button pressed', randomButton, playerIndex)
    });
}, 1000)