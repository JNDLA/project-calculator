const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const port = 3000;

const app = express();
// post method
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res){
  //console.log('dirname', __dirname);
 //res.sendFile(__dirname + "/index.html")
 res.sendFile("/index.html")
});



app.post("/", function (req, res){
  //console.log(req.body.num1)
  var num1 = Number(req.body.num1)
  var num2 = Number(req.body.num2)
  var result = num1 + num2
  res.send(`suma: ${result}`)
  //logowanie do konsoli
  console.log(req.body);
})

app.listen(port, function(){
  console.log(`Your server on port: ${port}`);
})
