const http = require('http');
let compStr = '';

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');

  response.on('data', function(str) {
    compStr += str;
  });
  response.on('end', function() {
    console.log(compStr);
  })
  response.on('error', console.error);

}).on('error', console.error);
