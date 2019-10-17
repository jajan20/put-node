const express = require('express'), app = express()
const bodyParser = require('body-parser')
const http = require('http')
const cors = require('cors')

const webSocketServer = require('websocket').server
const server = http.createServer(function(req, res) {
  res.end()
})


const wsServer = new webSocketServer ({ 
  httpServer: server,
  autoAcceptConnections: true 
})

const port = process.env.PORT || 3000

server.listen(port)

let whiteList = 'https://put-node.herokuapp.com/'


function originIsAllowed(origin) {
  return origin == whiteList
}

wsServer.on('request', function(request) {
//  if (originIsAllowed(request.origin)) {
  console.log('Client connection succesful!', request.origin)
  let connection = request.accept('PutIO')
  connection.on('message', function(message) {
    console.log('Message', message)
  })
  connection.sendUTF('Thanks for your message!')
//  }
})




// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   console.log('')
//   res.write('<p>Hello Server</p>')
//   res.end()
// })

// app.post('/putio', (req, res) => {
//   console.log('PutIO:', req.body)
//   res.end()
// })

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))