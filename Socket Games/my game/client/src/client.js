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

function init() {
    socket.emit('connected')
    socket.on('message', log)

    document
        .querySelector('#chat-form')
        .addEventListener('submit', onChatSubmitted)
} const socket = io(); init()