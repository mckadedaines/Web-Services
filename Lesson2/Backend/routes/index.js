// const express = require('express');
// const app = express();

// const contactsRouter = require('../controllers/contacts');

// app.use('./', require('../controllers/contacts'));

// app.get('/', (req, res) => {
//   res.send('Welcome to the home page!');
// });

// app.listen(8080, () => {
//   console.log('Server is running on port 8080');
// });

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router;