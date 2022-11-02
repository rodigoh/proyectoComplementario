const express = require("express")
const {resolve} = require('path')
const method = require('method-override')
const session = require('express-session');
const cookie = require('cookie-parser');
const app = express();
const {port, callback} = require('./modules/listen')
const userMiddleware = require('./middlewares/user')

app.listen(port, callback());

app.set ('views', resolve(__dirname, 'views'));
app.set("view engine", "ejs");


app.use(express.urlencoded({extended:false})); 
app.use(express.json())
app.use(method('m'));
app.use(session({
    secret:'nodejs',
    saveUninitialized:true,
    resave:true
})) 
app.use(cookie())

app.use(userMiddleware)

app.use('/users', require('./routes/users.routes'))
app.use('/', require('./routes/movies.routes'))
