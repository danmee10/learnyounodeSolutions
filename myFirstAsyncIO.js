var fs = require('fs');

var path = process.argv.slice(2)[0];
fs.readFile(path, 'utf8', function(err, data){
  if (err) {
    console.log(err);
  } else {
    console.log(data.split(/\n/).length - 1);
  }
});
