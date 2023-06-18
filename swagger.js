const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'API'
  },
  host: 'cse341-spring23-s6kv.onrender.com',
  schemes: ['https']
};

const outputFile = './Lesson2/Backend/swagger.json';
const endpointsFiles = ['./Lesson2/Backend/routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);