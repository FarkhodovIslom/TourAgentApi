const mongoose = require('.mongoose');
const Schema = mongoose.Schema;

const tourGuideSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    tours: {
        type: Array,
        required: true
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model('tourGuide', tourGuideSchema);