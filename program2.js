//exercise 5 - filtered ls
// first argument - directory name
// second argument - file extension to filter by
var fs = require('fs');
var path = require('path');
var mymodule = require('./module');

mymodule(process.argv[2], process.argv[3], function(err, list) {
  if (err) {
    throw err;
  } else {
    for (var i = 0; i < list.length; i++) {
      console.log(list[i]);
    }
  }
});
