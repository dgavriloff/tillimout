require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors')
const TIO = require('./models/tio')


app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

app.get('/api/tios', (request, response) => {
    TIO.find({})
    .then(tio => {
      response.json(tio)
    })
    .catch(err => console.log("Error in MongoDB: ", err))
  })

app.post('/api/tios', (request, response) => {
  const body = request.body
  if(!body.username || !body.password || !body.endDate){
    return response.status(400).json({
      error : 'insufficient data entry'
    })
  }
  const newTIO  = TIO({
    username : body.username,
    password : body.password,
    endDate : body.endDate,
    branch : body.branch ? body.branch : "",
    name : body.name ? body.name : "",
    rank : body.rank ? body.rank : "",
    likes : 0
  })

  newTIO.save()
    .then(tio => {
      response.json(tio)
    })
    .catch(err => {
      console.log("Error savingto MDB: ", err)
    })
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})