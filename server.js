//  packeage //
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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
const personRoutes = require('./routes/personRoutes');
const listRoutes = require('./routes/listRoutes');
const bookRoutes = require('./routes/bookRoutes');
const extensionRoutes = require('./routes/extensionRoutes');
const mediatorRoutes = require('./routes/mediatorRoutes');
const apiDocsRoutes = require('./routes/apiDocsRoutes');
const fbAuthenRoutes = require('./routes/fbAuthenRoutes');
const fbExtensionRoutes = require('./routes/fbExtensionRoutes');
// routes //

// bodyParser //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// bodyParser //


// routes //
app.use('/persons', personRoutes);
app.use('/lists', listRoutes);
app.use('/books', bookRoutes);
app.use('/extensions', extensionRoutes);
app.use('/mediators', mediatorRoutes);
app.use('/api-docs',apiDocsRoutes);
app.use('/fbAuthen',fbAuthenRoutes);
app.use('/fbExtension',fbExtensionRoutes);
// routes //

// server //
app.listen(3000, () => {
  console.log('Start server at port 3000.');
});
// server //
