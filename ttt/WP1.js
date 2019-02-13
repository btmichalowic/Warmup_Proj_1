
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(__dirname + '/public'));

const http = require('http');
const url = require('url');
const fs = require('fs')
 app.get('/', (request, response) =>  response.sendFile(`${__dirname}/Frontpage.html`));




app.post('/', (request, response) => {


  const postBody = request.body.Name;
  
  if(postBody!=''){
  	var Hello = "Hello " + postBody + ", " + new Date().toLocaleDateString()
    console.log(Hello);
       response.redirect('/');
      
    }else {
    	 response.redirect('/');
    	
    }
});

app.listen(3000, () => console.info('Application running on port 3000'));