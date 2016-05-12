'use strict';

const PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
 


const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/xit';

mongoose.connect(MONGOURL, err => {
	console.log(err || `Connected to MongoDB at ${MONGOURL}`)
});

var app = express();
app.use(cookieParser());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var stormpath = require('express-stormpath');

app.use(stormpath.init(app, {
  web: {
    register: {
      form: {
        fields: {
          profilePic: {
            enabled: true,
            label: 'image url',
            name: 'profilePic',
            required: false,
            type: 'text'
          },
          favoriteColor: {
            enabled: true,
            label: 'Favorite Color',
            name: 'favoriteColor',
            placeholder: 'E.g. Red, Blue',
            required: true,
            type: 'text'
          }
        }
      }
    }
  }
}));

// app.on('stormpath.ready', function() {
//   app.listen(3000);
// });

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));

var server = http.createServer(app);

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
});