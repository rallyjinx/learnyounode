//exercise 3 - synchronous I/O
// var fs = require('fs');
// var file = fs.readFileSync(process.argv[2]);
// var words = file.toString().split('\n');
// console.log(words.length-1);

//exercise 4 - asynchronous I/O
// var fs = require('fs');
// var file = fs.readFile(process.argv[2], 'utf8', function(err, data) {
//   var words = data.toString().split('\n');
//   console.log(words.length-1);
// });

//exercise 5 - filtered ls
// first argument - directory name
// second argument - file extension to filter by
var fs = require('fs');
var path = require('path');
var filter = [];
var dir = fs.readdir(process.argv[2], function(err, list) {
for (var i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === "." + process.argv[3]) {
      console.log(list[i]);
    }
  }
});
