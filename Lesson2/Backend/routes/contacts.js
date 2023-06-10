const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts/id');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

module.exports = router;