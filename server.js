var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended: true}))
// routing configuration
require('./router/main')(app);
app.use(express.static(__dirname + '/public'));

// ejs configuration
app.set('views', __dirname + '/views/pages');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// run the server
var server = app.listen(8080, function(){
  console.log('Express server listening on port 8080');
})