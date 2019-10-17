window.onload = function() {

    let socket = new WebSocket('wss://put-node.herokuapp.com:5000', 'PutIO')
    socket.onopen = function(event) {
        socket.send('Connection succesful!')
    }    
    socket.onerror = function(err) {
        console.log('Error: ', err)
    }
    socket.onmessage = function(data) {
        console.log('Message: ', data)
    }
}

