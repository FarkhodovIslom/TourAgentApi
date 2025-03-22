const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const tourRoutes = require('./routes/tourRoutes');
const tourGuideRoutes = require('./routes/tourGuideRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

dotenv.config();
const app = express();

app.use('/tours', tourRoutes);
app.use('/guides', tourGuideRoutes);
app.use('/bookings', bookingRoutes);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => { console.log('Database connected succesfully') })
.catch((err) => { console.log('Error manshu yerda ->',err) });

const PORT = process.env .PORT || 1200;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
