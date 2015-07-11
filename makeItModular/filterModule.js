var fs = require('fs');

module.exports = function(dirName, ext, callback) {
  fs.readdir(dirName, function(err, data){
    if (err){
      return callback(err);
    } else {
      var data = data.filter(function(file) {
        var r = new RegExp('\.' + ext + '$');
        return r.test(file);
      });
      callback(null, data);
    }
  });
};
