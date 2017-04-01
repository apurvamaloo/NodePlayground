var http=require('http');
  var fs=require('fs');

function errorMessage(response)
{
  response.writeHead(404,{'content-type':'text/json'});
  response.write("Page not found");
  response.end();
}
function onRequest(request,response)
{
//  console.log("request is",request);
if(request.method=='GET' && request.url=='/')
{
response.writeHead(200,{'content-type':'text/html'});
fs.createReadStream('index.html').pipe(response);
}
else {
  errorMessage(response);
}
}
http.createServer(onRequest).listen(8080);
console.log("server started at 8080");
