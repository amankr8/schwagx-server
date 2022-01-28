const mongoose = require('mongoose')

const swagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

const Swag = mongoose.model('Swag', swagSchema)

module.exports = Swag