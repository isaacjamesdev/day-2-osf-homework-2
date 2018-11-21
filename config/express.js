let app = require('express')();
app.api = require('../api/api');
require('../routes/routes')(app);


module.exports = app;
