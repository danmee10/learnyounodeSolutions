var http = require('http');

var urlArr = [
  process.argv.slice(2)[0],
  process.argv.slice(2)[1],
  process.argv.slice(2)[2]
]


var index = 0;
var get = function() {
  http.get(urlArr[index], function(response){
    var rData = '';

    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', function(data){
      rData += data;
    });
    response.on('end', function(e){
      console.log(rData);
      index++;
      get();
    });
  });
};

get();