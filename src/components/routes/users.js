const express = require('express')
const { register, login } = require('../controllers/users')
const router = express.Router()

// baseURL: https://schwagx.herokuapp.com/users/
router.post('/register', register)
router.post('/login', login)

module.exports = router