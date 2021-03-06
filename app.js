const express = require( 'express');
const nunjucks = require('nunjucks');

const app = express(); // creates an instance of an express application

let port =3000;
// TEST PUSH ON GITHUB

app.use(function(req, res, next){
	console.log(req.method, res.statusCode);
	console.log(req.path);

	next();
});

app.use('/special',function(req, res, next){
	console.log("OMG you've reached the special area!!!")
	next();
});

app.listen(port, function(req, res){
	console.log('Server is running...');

});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates


