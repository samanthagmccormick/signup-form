var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var apiController = require('./controllers/api.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// GET for URL navigation
app.get('/', indexController.index);

app.get('/success', indexController.success);

// POST for form submissions
app.post('/formsubmit', apiController.submit);


var server = app.listen(9474, function() {
	console.log('Express server listening on port ' + server.address().port);
});
