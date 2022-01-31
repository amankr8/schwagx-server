const express = require('express')
const app = express()

require('dotenv').config()

const connect = require('./config/db')
connect()

var cors = require('cors')
app.use(cors())

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.use('/swags', require('./components/routes/swags'))

app.get('/', (req, res) => {
  res.render('index')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})