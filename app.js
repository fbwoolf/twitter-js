const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // creates an instance of an express application

// const databaseOfPosts = [{id: 1, name: 'Post'}]

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
	//console.log('Request body: ', req.body)

    console.log(`Verb: ${req.method} URI: ${req.url}`);
    next();
});

app.get('/', function (req, res) {
    res.send('Server is listening');
});

app.get('/posts', function (req, res) {
    res.send('This is a post form');
});

app.post('/posts', function (req, res) {
	console.log('Processing');
	res.send('Processing a post');
});

// app.post('/posts', function (req, res, next) {
// 	const newPost = req.body;
// 	newPost.id = databaseOfPosts.length +1;
// 	databaseOfPosts.push(newPost);
// 	res.status(201).send('You created a new post' + JSON.stringify(newPost));
// });

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});

