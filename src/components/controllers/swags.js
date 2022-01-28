const Swag = require('../models/Swag')

exports.getSwags = async (req, res) => {
    try {
        const swags = await Swag.find();
        res.json(swags)
    } catch (err) {
        console.error(err)
    }
}

exports.createSwag = async (req, res) => {
    try {
        const newSwag = new Swag(req.body)
        await newSwag.save()
        res.json(newSwag)
    } catch (err) {
        console.error(err)
    }
}

exports.getSwag = async (req, res) => {
    try {
        const swag = await Swag.findById(req.params.id);
        res.json(swag)
    } catch (err) {
        console.error(err)
    }
}

exports.updateSwag = async (req, res) => {
    try {
        const update = req.body
        const updatedSwag = await Swag.findByIdAndUpdate(req.params.id, update, {new: true})
        res.json(updatedSwag)
    } catch (err) {
        console.error(err)
    }
}

exports.deleteSwag = async (req, res) => {
    try {
        await Swag.findByIdAndDelete(req.params.id)
        res.json('Swag deleted successfully!')
    } catch (err) {
        console.error(err)
    }
}