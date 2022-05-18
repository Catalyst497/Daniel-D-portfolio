const express = require("express"),
      app = express(),
      path = require('path'),
      bodyParser = require("body-parser");

//   BODY PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// TO USE PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.post('/mail', function(req,res){
    const name = req.body.name,
          email = req.body.email,
          message = req.body.message;
    res.redirect(`mailto:danielduyilemi@gmail.com?cc=${email}&subject=Hi.%20I%20am%20${name}%20and%20I%20have%20an%20interest%20in%20your%20work&body=${message}`);
})
app.listen(process.env.PORT || 500, "0.0.0.0", function(){
    console.log('Welcome to my portfolio');
})