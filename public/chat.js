const socket = io()

socket.on('messages', data =>{
    const html = data.map(msj =>{
        return `<div>
        <strong>${msj.author.name}</strong>
        <strong>${msj.author.fyh}</strong>
        <em>${msj.text}</em>
        </div>
        `
    })
    .join(" ")

    document.getElementById('messages').innerHTML = html
})

function addMessage(){
    const message = {
        author: {
            email: document.getElementById("email").value,
            name: document.getElementById("nombreChat").value,
            lastname: document.getElementById("apellido").value,
            age: document.getElementById("edad").value,
            alias: document.getElementById("alias").value,
            avatar: document.getElementById("avatar").value,
        },
        text: document.getElementById("text").value
    }

    socket.emit('new-message', message)

}