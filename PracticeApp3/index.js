var express=require('express')
var app=express();


app.get('/',function (req,res) {
    res.send("This is home page")
})


app.get('/contact',function (req,res) {
    res.send("This is contact page")
})




app.use('/about',function (req,res,next) {
    console.log("I am about middleware")
    next()
})


app.get('/about',function (req,res) {
    res.send("This is about page")
})




app.listen(5000)