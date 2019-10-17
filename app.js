const express = require('express'), app = express()
const bodyParser = require('body-parser')
const http = require('http')
const cors = require('cors')

const webSocketServer = require('websocket').server
const server = http.createServer()
      server.listen(5000)

const wsServer = new webSocketServer ({ httpServer: server })
const port = process.env.PORT || 3000

let corsOptions = {
  origin: 'https://put-node.herokuapp.com/',
}

wsServer.on('request', function(request) {
  console.log('Client connection succesful!', request.origin)
  let connection = request.accept('PutIO', request.origin)
  connection.on('message', function(message) {
    console.log('Message', message)
  })
  connection.sendUTF('Thanks for your message!')
})




app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  console.log('')
  res.write('<p>Hello Server</p>')
  res.end()
})

app.post('/putio', (req, res) => {
  console.log('PutIO:', req.body)
  res.end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))