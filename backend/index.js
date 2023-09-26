const express = require("express")
const app = express()
const cors = require('cors')
const fs = require('fs')
const baseUrl = '/api/tios'

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())

const readDb = (func) => {
  fs.readFile('./db.json', 'utf8',(err, jsonString) => {
    if (err){
      console.log(`Error reading file: ${err}`)
      return
    }
    try {
      func(jsonString)
    } catch {
      console.log("Error getting TIOs")
    }
  }) 
}

const writeDb = (jsonString) => {
  fs.writeFile('./db.json', jsonString, err => {
    if(err)
      console.log(`Error writing file: ${err}`)
    else
      console.log("Successfully wrote to file")
    })
  }




app.get(baseUrl, (request, response) => {
  readDb((jsonString) => {
     return response.json(JSON.parse(jsonString))
  })
})

app.get(`${baseUrl}/:id`, (request, response) => {
  const id = Number(request.params.id)
  readDb((jsonString) => {
    const TIO = JSON.parse(jsonString).find(TIO => id === TIO.id)
    if (!TIO)
      return response.status(404).end()
    return response.json(TIO)
 })
})


app.delete(`${baseUrl}/:id`, (request, response) => {
  const id = Number(request.params.id)
  readDb((jsonString) => {
    writeDb(JSON.stringify(JSON.parse(jsonString).filter(tio => tio.id != id)))
    response.status(204).end()
  })
})

const generateId = (TIOs) => {

  const maxId = TIOs.length > 0
  ? Math.max(...TIOs.map(t => t.id))
  : 0
  return maxId + 1
}

app.post(baseUrl, (request, response) => {
  const body = request.body
  if(!body.username || !body.password || !body.endDate){
    return response.status(400).json({
      error : 'insufficient data entry'
    })
  }
  readDb((jsonString) => {

    const TIOs = JSON.parse(jsonString)

    const TIO = {
      id : generateId(TIOs),
      username : body.username,
      password : body.password,
      endDate : body.endDate,
      branch : body.branch ? body.branch : "",
      name : body.name ? body.name : "",
      rank : body.rank ? body.rank : "",
      likes : 0
    }

    const temp = TIOs.concat(TIO)
    writeDb(JSON.stringify(temp))
    console.log("here")
    response.json(TIO)
  })
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})