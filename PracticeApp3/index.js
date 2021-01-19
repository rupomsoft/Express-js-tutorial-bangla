var express = require('express');
var app = express();


app.use(function (req,res,middle) {
    console.log('I am middle');
    middle();
})


app.get('/', function(req, res,middle){
    res.send("Home Page");
});





app.listen(3000);