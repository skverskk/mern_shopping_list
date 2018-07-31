const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Bring in /routes/api/items file
const items = require('./routes/api/items');

const app = express();

app.use(bodyParser.json());

// DB Connect
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes File
app.use('/api/items', items);

// Connect to Server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));