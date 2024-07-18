require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/analytics', analyticsRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5013;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
