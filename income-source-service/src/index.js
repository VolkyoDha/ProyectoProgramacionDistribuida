require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const incomeSourceRoutes = require('./routes/incomeSourceRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/income-sources', incomeSourceRoutes);

console.log("MongoDB URI:", process.env.MONGODB_URI); // Agregar para depuración

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
