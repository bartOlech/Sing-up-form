const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash');
const expressSession = require('express-session');
const path = require('path');
const router = require('./routes/index');

app.set(path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(connectFlash());
app.use(expressSession({
    secret:'form',
    resave:false, 
    saveUninitialized:true
}))

app.use('/', router)

module.exports = app;