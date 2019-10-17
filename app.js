const express = require('express'), app = express()
const bodyParser = require('body-parser')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  console.log('GET:')
  res.write('<p>Hello Server</p>')
  res.end()
})

io.on('connection', (socket) => {
  console.log('IO Connection')
  socket.on('create data', function(data) {
    socket.emit('data created', data)
  })
})

// app.post('/putio', (req, res) => {
//   console.log('PutIO:', req.body)
//   res.end()
// })

app.post('/putio', (req, res) => {
  io.sockets.emit('data created', data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))