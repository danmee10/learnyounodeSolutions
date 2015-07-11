var fs = require('fs');

var path = process.argv.slice(2)[0];

var contents = fs.readFileSync(path).toString();
console.log(contents.split(/\n/).length - 1);