const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // creates an instance of an express application

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
    console.log(`Verb: ${req.method} URI: ${req.url}`);
    next( );
});

app.get('/', function (req, res) {
    res.send('server listening');
});

app.post('/modernism', function (req, res) {
	const newPost = req.body;
	newPost.id = databaseOfPosts.length +1;
	databaseOfPosts.push(newPost);
	res.status(201).send("You created a new post" + JSON.stringify(newPost));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});