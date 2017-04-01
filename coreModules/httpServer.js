var http=require('http');

function onRequest(request,response)
{
//  console.log("request is",request);
  response.writeHead(200,{'content-type':'text/json'});
  response.write("here is output for you request");
  response.end();
}
http.createServer(onRequest).listen(8080);
console.log("server started at 8080");
