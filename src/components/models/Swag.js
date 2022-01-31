const mongoose = require('mongoose')

const swagSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    owner: {
      type: String,
      required: true
    },
    category: {
      type: String
    },
    image: {
      type: String
    }
}, { versionKey: false })

const Swag = mongoose.model('Swag', swagSchema)

module.exports = Swag