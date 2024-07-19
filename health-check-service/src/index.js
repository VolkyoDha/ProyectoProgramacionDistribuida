require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const healthCheckRoutes = require('./routes/healthCheckRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/health-check', healthCheckRoutes);

mongoose.connect('mongodb+srv://admin:admin@data3apps.owzveqi.mongodb.net/elysium?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
