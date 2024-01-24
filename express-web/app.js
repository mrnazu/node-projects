const express = require('express');
const path = require('path');
var cons = require('consolidate');

const app = express();

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/blog', function(req, res){
    res.render('blog');
});

app.listen(3003);
console.log('Server is running on port 3003...');