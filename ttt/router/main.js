var fs = require('fs');
var ejs = require('ejs')
var express = require('express');
var router = express.Router();

var Hello = '';
module.exports = function(app){


  app.get('/', function(req, res){
    //var comments = JSON.parse(fs.readFileSync(__dirname + '/../comments.json'));
    res.render('index.ejs', {name:Hello});
  });

  app.post('/index.ejs', function(req, res){

    var name = req.body.name;
    if(name != ''){
   	 var date  = new Date().toLocaleDateString();
   	 Hello = "Hello " + name + ", " + date;

   	 //TODO: Append to .ejs page

  	//console.log(Hello)
  	 res.redirect('/');

  	 app.get('/', function(req, res){
    //var comments = JSON.parse(fs.readFileSync(__dirname + '/../comments.json'));
    res.render('index.ejs', {name: Hello});

  });



   	}else{
   // var comments = JSON.parse(fs.readFileSync(__dirname + '/../comments.json'));
  //  comments.push(newComment);
   // fs.writeFileSync(__dirname + '/../comments.json', comments, 'utf8');
    //redirect to a 'get' on '/
		  //'
    res.redirect('/');
		  Hello = '';

  app.get('/', function(req, res){
    //var comments = JSON.parse(fs.readFileSync(__dirname + '/../comments.json'));
    res.render('index.ejs', {name: Hello});

  });

	}
  });

  app.get('/about', function(req, res){
    res.render('about.html')
  });

}
