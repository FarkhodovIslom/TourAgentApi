const TourGuide = require('../models/tourGuide');

exports.createTourGuide = async (req, res) => {
    try {
        const tourGuide = await TourGuide.create(req.body);

        res.status(201).json({ 
            status: 'success',
            data: {tourGuide}
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}