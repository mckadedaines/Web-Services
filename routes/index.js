const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.mckadeRoute);
routes.get('/kenna', lesson1Controller.kennaRoute);

module.exports = routes;