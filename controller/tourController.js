const Tour = require('../models/Tour');
const TourGuide = require('../models/tourGuide');

exports.createTour = async(req,res) => {
    try {
        const tour = await Tour.create(req.body);

        if (req.body.guides && req.body.guides.length > 0) {
            await Promise.all(req.body.guides.map(guideId => {
                return TourGuide.findByIdAndUpdate(
                    guideId,
                    { $push: { tours: tour._id } },
                );
            }));
        };

        res.status(201).json({message: 'Tour created successfully'});
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Tour not found',
        });
    };
};

exports.getTour = async(req, res) => {
    try {
        const tour = await Tour.create(req.body);

        if(!tour) {
            return res.status(404).json({
                status: 'fail',
                message: 'Tour not found',
            });
        }

        res.status(200).json(tour);
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'Tour not found',
        })
    }
}