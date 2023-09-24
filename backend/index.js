const express = require("express")
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())

let TIOs = [
  {
    id : 1,
    username : "admin",
    password : "password",
    endDate : "2024-01-05T19:24:32.618Z",
    branch : "United States Marine Corps",
    name : "Denis Gavriloff",
    rank : "Corporal",
    likes : 0
  },
  {
    id : 2,
    username : "user",
    password : "pass",
    endDate : "2024-01-05T19:24:32.618Z",
    branch : "USMC",
    name : "Denis Gavriloff",
    rank : "Corporal",
    likes : 0
  },
  {
    id : 3,
    username : "ooousay",
    password : "hello",
    endDate : "2024-01-05T19:24:32.618Z",
    likes : 0
  }
]

app.get('/api/tios', (request, response) => {
  response.json(TIOs)
})

app.get('/api/tios/:id', (request, response) => {
  const id = Number(request.params.id)
  const TIO = TIOs.find(TIO => id === TIO.id)
  response.json(TIO)
})

app.delete('/api/tios/:id', (request, response) => {
  const id = Number(request.params.id)
  TIOs = TIOs.filter(TIO => id != TIO.id)
  response.status(204).end()
})

const generateId = () => {
  const maxId = TIOs.length > 0
  ? Math.max(...TIOs.map(t => t.id))
  : 0
  return maxId + 1
}

app.post('/api/tios', (request, response) => {
  const body = request.body
  if(!body.username || !body.password || !body.endDate){
    return response.status(400).json({
      error : 'insufficient data entry'
    })
  }

  const TIO = {
      id : generateId(),
      username : body.username,
      password : body.password,
      endDate : body.endDate,
      branch : body.branch ? body.branch : "",
      name : body.name ? body.name : "",
      rank : body.rank ? body.rank : "",
      likes : 0
    }

    TIOs.concat(TIO)
    response.json(TIO)
  })


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})