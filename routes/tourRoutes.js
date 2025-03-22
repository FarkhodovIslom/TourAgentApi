const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router.post('/', tourController.createTour);
router.get('/:id', tourController.getTour);

module.exports = router;