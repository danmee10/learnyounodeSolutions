var http = require('http');

var url = process.argv.slice(2)[0];

http.get(url, function(response){
  response.setEncoding('utf8');
  response.on("error", console.error);
  response.on('data', console.log);
});