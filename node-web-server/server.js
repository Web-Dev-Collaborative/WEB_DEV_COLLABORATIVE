const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;


var app = express();

//sets handler for HTTP get request
//get(url, function to run)


//partials --> updates a specific part of code in all the pages
//footer is loaded in both about.hbs and home.hbs via partials
hbs.registerPartials(__dirname + '/views/partials');

//handlebars
app.set('view engine', 'hbs');


app.use((req, res, next) => {

	var now = new Date().toString();
	var log = (`${now}: ${req.method} ${req.url}`);
	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => { 
		if(err) console.log(err);
	});
	next();
});


//middleware //app.use
app.use(express.static(__dirname + '/public'));



hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();

});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();

});


app.get('/', (req, res) =>{
	//res.send('<h1>Hello Express</h1>');

	res.render('home.hbs',{
		pageTitle : 'Home Page',
		welcomeMessage : 'Welcome to home page'

	});
});

app.get('/about', (req, res) =>{
	res.render('about.hbs',{
		pageTitle : 'About Page',
		
	});
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects'
  });
});


app.get('/bad', (req, res) =>{
	res.send({
		error: 'Error!'
	});
});

app.listen(port, () =>{
	console.log(`Server running on port ${port}`);
});