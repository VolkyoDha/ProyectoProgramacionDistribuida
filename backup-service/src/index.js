require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const backupRoutes = require('./routes/backupRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api/backup', backupRoutes);

const PORT = process.env.PORT || 5019;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
