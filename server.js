const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const mongodb = require('./Lesson2/Backend/db/connect');


const port = process.env.PORT ||8080;

app.use('/', require('./Lesson2/Backend/routes'));

console.log('Web Server is listening at port ' + (process.env.PORT || 8080));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(process.env.PORT || 8080);
        console.log('Database connected');
    }
});