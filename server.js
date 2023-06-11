const express = require('express');

const app = express();
const mongodb = require('./Lesson2/Backend/db/connect');

const port = process.env.PORT ||8080;

app.use('/', require('./Lesson2/Backend/routes'));

app.listen(process.env.PORT || 8080);
console.log('Web Server is listening at port ' + (process.env.PORT || 8080));