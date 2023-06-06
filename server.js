const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.mckadeRoute);
app.get('/kenna', lesson1Controller.kennaRoute);

const port = 3000;

app.listen(process.env.PORT || 3000);
console.log('Web Server is listening at port ' + (process.env.PORT || 3000));