const mongoose = require('mongoose')

const connect = async () => {
    await mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connect