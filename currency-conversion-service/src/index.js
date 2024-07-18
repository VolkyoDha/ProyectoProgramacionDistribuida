require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const conversionRoutes = require('./routes/conversionRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/currency-conversion', conversionRoutes);

const PORT = process.env.PORT || 5015;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
