var Stream = require('stream').Transform;

var getPage = function(url, callback) {
  // Get the correct module to request the page
  var http = require(url.split('://')[0]);
  var request = http.request(url, function(response) {
    var redirect = null;
    // If the page requests a HTTP redirect, load the redirected URL
    if (response.headers.location) {
      var split = url.split('/');
      var redirect = split[0] + '//' + split[2] + response.headers.location;
      getPage(redirect, callback);
      request.abort();
    }

    var data = new Stream();
    response.on('data', function(chunk) {
      data.push(chunk);
    });

    response.on('end', function() {
      redirect || callback(data.read());
    });
  });

  request.end();
};

module.exports = {
  buffer: getPage,
  string: function(url, callback) {
    getPage(url, function(data) {
      callback(data.toString());
    });
  },
};
