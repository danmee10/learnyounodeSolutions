var http = require('http');

var url = process.argv.slice(2)[0];

http.get(url, function(response){
  var rData = '';
  response.setEncoding('utf8');

  response.on("error", console.error);
  response.on('data', function(data){
    rData += data;
  });
  response.on('end', function(e){
    console.log(rData.length);
    console.log(rData);
  });
});
