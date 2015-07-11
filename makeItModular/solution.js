var filteredLS = require('./filterModule.js');

var dirName = process.argv.slice(2)[0];
var ext = process.argv.slice(2)[1];

filteredLS(dirName, ext, function(err, data){
  if (err) {
    return console.log("Error", err);
  } else {
    data.forEach(function(f){
      console.log(f);
    });
  }
});