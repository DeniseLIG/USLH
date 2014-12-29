
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
var hashT =  {
   'video' : 'http://www.youtube.com/watch?v=UcPJDtgWnwk#t=0',
   'Video' : 'http://www.youtube.com/watch?v=UcPJDtgWnwk#t=0',
   'MELKit' : 'http://resource.uslh.org/Willis+Maritime+Employers+Liability+Kit.pdf',
   'SafeShore' : 'https://fs30.formsite.com/LIGMarine/form17/index.html'
};
app.get('/:id', function(req, res) {
  res.redirect(hashT[req.params.id]);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
