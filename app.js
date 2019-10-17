const express = require('express')
const bodyParser = require('body-parser')
const app = express()
 
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.write('<h1>PutIO Service Test</h1>')
  res.end()
})

app.post('/putio', (req, res) => {
  console.log('PutIO:', req.body)
  res.end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))