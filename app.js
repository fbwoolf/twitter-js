const express = require('express');
const app = express(); // creates an instance of an express application
const routes = require('./routes');
app.use('/', routes);


