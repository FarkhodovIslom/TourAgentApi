const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');

router.post('/', bookingController.createBooking);
router.get('/:id', bookingController.getBooking);

module.exports = router;