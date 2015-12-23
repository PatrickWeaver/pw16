var express = require('express'),
    mongoose = require('mongoose');
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/pwapi');

var Project = require('./models/projectModel');

var app = express();

var port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

pwRouter = require('./routes/pwroutes')(Project);

app.use('/x', pwRouter);

app.get('/', function(req, res){
  res.send('Patrick Weaver');
});

app.listen(port, function(){
  console.log('Gulp is running the app on PORT: ' + port);
});

