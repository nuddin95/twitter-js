const express = require( 'express');
const app = express(); // creates an instance of an express application

let port =3000;

app.use(function(req, res, next){
	console.log(req.method, res.statusCode);
	console.log(req.path);
	next();
});

app.use('/special',function(req, res, next){
	console.log("OMG you've reached the special area!!!")
	next();
});

app.get('/', function(req, res){
	res.send('WELCOME TO TWITTER.JS POWERED BY SERVERS IN NORWAY');
});

app.listen(port, function(req, res){
	console.log('Server is running...');
});

