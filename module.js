//mod(dirName, extStr, cb)
var fs = require('fs');
var path = require('path');
var filter = [];
module.exports = function(dirName, extStr, callback) {
  fs.readdir(dirName, function(err, list) {
    if (err) {
      return callback(err);
    }
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) === "." + extStr) {
        filter.push(list[i]);
      }
    }
    return callback(null, filter);
  });
}
