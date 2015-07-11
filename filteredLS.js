var fs = require('fs');

var dirName = process.argv.slice(2)[0];
var ext = process.argv.slice(2)[1];

fs.readdir(dirName, function(err, data){
  if (err) {
    console.log(err);
  } else {
    data.forEach(function(file) {
      var r = new RegExp('\.' + ext + '$');
      if (r.test(file)) {
        console.log(file);
      }
    });
  }
});

