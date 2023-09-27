const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

console.log("Connecting to", url)

mongoose.connect(url)
  .then(result => {
    console.log("connected to MongoDB")
  })
  .catch(err => {
    console.log("Error connecting to MongoDB", err.message)
  })

const tioSchema = new mongoose.Schema({
  username: String,
  password: String,
  endDate: Date,
  branch: String,
  name: String,
  rank: String,
  likes: Number
})

tioSchema.set('toJSON', {
  transom : (document,  returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('TIO', tioSchema)