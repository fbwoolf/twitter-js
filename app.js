const express = require('express');
const app = express(); // creates an instance of an express application
const routes = require('./routes');
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

app.use('/', routes);

app.use(express.static('./public'));

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});