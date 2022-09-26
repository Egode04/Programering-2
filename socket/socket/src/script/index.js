const socket = io()
const users = []

users['user'] = []
users['password'] = []

socket.on('connect', () => {
    console.log(socket.id)
})

const username = document.querySelector('#username')
const login = document.querySelector('#login')

const input = document.querySelector('#message')
const submit = document.querySelector('#send')

submit.addEventListener('click', () => {
    socket.emit('msg', input.value)
    if (users['user'][socket.id] !== undefined) {
        console.log(`${users['user'][socket.id]}: ${input.value}`)
    }
})

login.addEventListener('click', () => {
    users['user'][socket.id] = username.value
    users['password'][username.value] = password.value
    console.log(users['user'])
})

// socket.on('server', msg => {
//     console.log(msg)
// })

const listener = (eventName, ...args) => {
    console.log(eventName, args)
    console.log(users)
}

socket.onAny(listener)