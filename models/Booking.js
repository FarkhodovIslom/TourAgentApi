const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({ 
    userName: {
        type: String,
        required: true
    }, 
    tourId: {
        type: Schema.Types.ObjectId,
        ref: 'Tour',
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

bookingSchema.virtual('tour', {
    ref: 'Tour',
    localField: 'tour_id',
    foreignField: '_id',
    justOne: true
});