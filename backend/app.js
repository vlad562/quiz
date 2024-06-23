const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const user = []

app.post('/login',(req,res) => {
  console.log(1)
  user.push([req.body.email,req.body.password])
  res.send(200)
})

app.listen(3001, () => {
  console.log('Сервер запущен')
})