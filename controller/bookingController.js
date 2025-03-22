const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    try {
        const booking = await Booking.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                booking
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    };
};

exports.getBooking = async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id)
        .populate({
          path: 'tour',
          select: '_id name location price'
        });
      
      if (!booking) {
        return res.status(404).json({
          status: 'fail',
          message: 'Booking not found'
        });
      }
      
      res.status(200).json(booking);
    } catch (error) {
      res.status(400).json({
        status: 'fail',
        message: error.message
      });
    }
};