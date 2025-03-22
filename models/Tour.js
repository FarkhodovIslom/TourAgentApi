const mongoose = require('mongoose');
const { Schema } = mongoose;

const tourSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Tour name required!'],
    },
    description: {
        type: String,
        required: [true, 'Tour description required'],
    }, 
    price: {
        type: Number,
        required: [true, 'Tour price required'],
    },
    location: {
        type: String,
        required: [true, 'Tour location required'],
    },
    guides: {
        type: Schema.Types.ObjectId,
        ref: 'tourGuide',
    }
});

module.exports = mongoose.model('Tour', tourSchema);