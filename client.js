window.onload = function() {
    let socket = new WebSocket('wss://put-node.herokuapp.com:5000', 'PutIO')
    socket.send('Connection succesful!')
}

