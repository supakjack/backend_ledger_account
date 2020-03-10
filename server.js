//  packeage //
require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
//  packeage //

// Access-Control-Allow-Origin
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token, Content-Type, accept-version');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// Access-Control-Allow-Origin

// routes //
const listRoutes = require('./routes/listRoutes');
const bookRoutes = require('./routes/bookRoutes');
const personRoutes = require('./routes/personRoutes');
const authenRoutes = require('./routes/authenRoutes');
// routes //

// bodyParser //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// bodyParser //


// routes //
app.use('/lists', listRoutes);
app.use('/books', bookRoutes);
app.use('/persons', personRoutes);
app.use('/authens',authenRoutes);
// routes //


// get ApiDocsLatest
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// get getApiDocsLatest

// server //
app.listen(3000, () => {
  console.log('Start server at port 3000.');
});
// server //
