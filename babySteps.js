var response = process.argv.slice(2).reduce(function(p, c){
  return parseInt(p) + parseInt(c);
});

console.log(response);