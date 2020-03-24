
const express = require('express');
const expresslayout = require('express-ejs-layouts');

const bodyparser = require('body-parser');
const port = process.env.port || 3010;
const app = express();





app.set('view engine', 'ejs');
app.use(expresslayout);
app.use(express.static(__dirname + '/public')); 
app.use(bodyparser.urlencoded({encoded : true})); 

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.get('/rfc', (req, res) => {
    res.render('pages/rfc');
});

app.get('/contact', (req, res) => {
    res.render('pages/contact');
});

app.listen(port, () => (console.log('servidor activo, puerto 3010')));