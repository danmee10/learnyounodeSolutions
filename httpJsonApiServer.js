var http = require('http');
var nodeUrl = require('url');

var port = process.argv.slice(2)[0];

var parseTime = function(time) {
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  }
};

var parseUnix = function(time) {
  return {
    "unixtime": time.getTime()
  }
};

var server = http.createServer(function(req, res) {
  var url = nodeUrl.parse(req.url, true);
  if (req.method === 'GET') {
    var time = new Date(url.query.iso);

    if (url.pathname === '/api/parsetime') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(parseTime(time)));

    } else if (url.pathname === '/api/unixtime') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(parseUnix(time)));

    } else {
      res.writeHead(404);
      res.end("route not found.");
    }

  } else {
    return res.end('GETs only!\n');
  }
});

server.listen(port);