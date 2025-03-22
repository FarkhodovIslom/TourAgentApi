const express = require('express');
const router = express.Router();
const tourGuideController = require('../controller/tourGuideController');

router.post('/', tourGuideController.createTourGuide);

module.exports = router;