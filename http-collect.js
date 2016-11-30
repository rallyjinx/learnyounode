// Write a program that performs an HTTP GET request to a URL
// provided to you as the first command-line argument.
// Collect all data from the server (not just the first
// "data" event) and then write two lines to the console (stdout).
//
// The first line you write should just be an integer
// representing the number of characters received from the
// server. The second line should contain the complete
// String of characters sent by the server.
// Collect data across multiple "data" events and append the results
// together prior to printing the output. Use the "end" event to
// determine   when the stream is finished and you can write the output.
const http = require('http');
let len = 0;
let compStr = '';

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');

  response.on('data', function(str) {
    len += str.length;
    compStr += str;
  });
  response.on('end', function() {
    console.log(len);
    console.log(compStr);
  })
  response.on('error', console.error);

}).on('error', console.error);

// learnyounode solution, using bl (Buffer List):
// (npm install bl)
    // var http = require('http')
    // var bl = require('bl')
    //
    // http.get(process.argv[2], function (response) {
    //   response.pipe(bl(function (err, data) {
    //     if (err) {
    //       return console.error(err)
    //     }
    //     data = data.toString()
    //     console.log(data.length)
    //     console.log(data)
    //   }))
    // })
