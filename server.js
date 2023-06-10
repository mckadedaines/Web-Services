const express = require('express');
const app = express();
const lesson2Controller = require('./Lesson2/Backend/controllers/contacts.js');



const port = 8080;

app.use('/', require('./Lesson2/Backend/routes/index.js'));

app.listen(process.env.PORT || 8080);
console.log('Web Server is listening at port ' + (process.env.PORT || 8080));