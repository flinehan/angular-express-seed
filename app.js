// BASE SETUP
// ==============================================
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan         = require('morgan');
var routes         = require('./routes');
var port           = process.env.PORT || 8080;
var app            = express();
var router         = express.Router();

app.use(bodyParser());                            // pull information from html in POST
app.use(methodOverride());                        // simulate DELETE and PUT
app.use(morgan('dev')); 					                // log every request to the console
app.engine('html', require('ejs').renderFile);    // use ejs to render html
app.use(express.static(__dirname + '/public'));   // set the static files location /public/img will be /img for users


var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  //configure stuff here
  console.log('development')
}

// ROUTES
// ==============================================
router.get('/', routes.index);
router.get('/partials/:name', routes.partials);


app.use('/', router);

// START THE SERVER
// ==============================================
app.listen(port);
console.log('App listening on port ' + port);