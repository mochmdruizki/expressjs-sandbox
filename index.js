var express = require('express');
var app = express();
var port = 5000;
var pageRoute = require('./router/page');
var userRoute = require('./router/user');

app.set('view engine', 'ejs');

app.use('/', pageRoute);
app.use('/users', userRoute);

// app.get('/login', (req, res) => res.send('Login'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))