const express = require('express')
const app = express()

//app.methodname("url", function(req,res){})
app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/hi',function(req,res){
    res.send("<h1>Hi How are your</h1>")
});

app.listen(3000)

