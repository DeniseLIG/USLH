//This is a wrapper for other urls - like formsite.  
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
   'SafeShore' : 'http://safeshore.online/Submissions',
   'LIU' : 'http://safeshore.online/LIU/Form',
   'UmbrellaExcess': 'http://www.ligmarine.com/Dropbox/MarineFile/Umbrella',
   'NAVG': 'http://safeshore.online/Navg/Form',
   'virus': 'https://ninite.com/adaware-avast-avg-avira-essentials-malwarebytes-spybot2-super/',
   'MELInjury' : 'http://atlanta.blob.core.windows.net/public/maritime_employee_injury_report_form.docx',
   '7_Critical_Secrets' : 'http://atlanta.blob.core.windows.net/public/7_Critical_Secrets_to_Writing_Longshore_Insurance_2016.pdf',
   'SafeshoreFAQ' : 'https://ligresources.blob.core.windows.net/safeshore/Signal%20SafeShore%20%20FAQ%20-%202016.pdf',
   'SafeShoreFAQ' : 'https://ligresources.blob.core.windows.net/safeshore/Signal%20SafeShore%20%20FAQ%20-%202016.pdf',
   'safeshoreFAQ' : 'https://ligresources.blob.core.windows.net/safeshore/Signal%20SafeShore%20%20FAQ%20-%202016.pdf',
   'LossControl' : 'https://www.signalmutual.com/media/199739/safeshore-flyer-final-updated-2-7-2017.pdf',
   'MEL' : 'http://www.ligmarine.com/WebinarArchive/Mar2015',
   'MEL.pdf' : 'http://www.ligmarine.com/WebinarArchive/Mar2015',
   'WCSamples' : 'https://www.dropbox.com/sh/xj0re6nn3vajwk0/AADQZOZp76hURzwknHc0zUiaa?dl=0',
  'call' : 'tel:6467493117,,572241181,,#',
   '36' : 'http://36min.uk',
   'MKGSetup' : 'https://ninite.com/7zip-audacity-chrome-dropbox-firefox-greenshot-inkscape-itunes-notepadplusplus-paint.net-putty-qbittorrent-skype-spotify-teamviewer11-vlc-windirstat-winscp/'
};
app.get('/:id', function(req, res) {
  res.set('Location', hashT[req.params.id]);
  res.status(302).send('Moved Temporarily. Redirecting to '  + hashT[req.params.id])
  //res.redirect();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
