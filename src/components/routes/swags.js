const express = require('express');
const { getSwags, createSwag, getSwag, updateSwag, deleteSwag } = require('../controllers/swags');
const router = express.Router();

const auth = require('../../middleware/auth');

router.get('/', getSwags);
router.post('/', auth, createSwag);
router.get('/:id', getSwag);
router.put('/:id', auth, updateSwag);
router.delete('/:id', auth, deleteSwag);

module.exports = router;