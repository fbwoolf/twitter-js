const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione' }
    ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});



app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next) {
    console.log(`Verb: ${req.method} URI: ${req.url}`);
    next( );
});

app.get('/', function (req, res) {
        // res.render( 'index', {title: 'Hall of Fame', people: people} );
    res.render('index', function(err, html) {
        if (err) throw err;
        res.send(html);
    })
    // res.send('server listening');
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
