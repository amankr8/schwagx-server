const express = require('express')
const { getSwags, createSwag, getSwag, updateSwag, deleteSwag, deleteSwags } = require('../controllers/swags')
const router = express.Router()

// baseURL: https://schwagx.herokuapp.com/swags/
router.get('/', getSwags)
router.post('/', createSwag)
router.delete('/', deleteSwags)
router.get('/:id', getSwag)
router.put('/:id', updateSwag)
router.delete('/:id', deleteSwag)

module.exports = router