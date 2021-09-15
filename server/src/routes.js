const express = require('express')
const router = express.Router()

// controllers
const Materials = require('./controllers/materials');

router.get('/materials');
// router get search
router.get('/materials/:id');
router.post('/materials');
router.patch('/materials/:id');
router.delete('/materials/:id')


module.exports = router;