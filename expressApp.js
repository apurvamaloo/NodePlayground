var express=require('express');
var app=express();

app.get("/",function(request,response)
{
  response.send("hello world");
})

app.listen(3000,function()
{
  console.log("app listning on 3000");
})
