var strftime = require('strftime');
var net = require('net');

var port = process.argv.slice(2)[0];

var server = net.createServer(function(socket){
  socket.end(strftime('%F %R') + "\n");
});
server.listen(port);
