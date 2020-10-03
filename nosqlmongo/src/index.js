const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Test connection to server
require('./controllers/authController')(app);

app.listen(3001);