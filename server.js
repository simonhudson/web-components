'use strict';

const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const path = require('path');
const PORT = 3000;

app.engine('.hbs', expressHandlebars({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
	res.render('home')
});

app.use(express.static('components'));

app.listen(PORT, (err) => {
	if (err) return console.log('Error:', err);
	console.log(`server is listening on ${PORT}`);
})