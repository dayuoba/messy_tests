var fs = require('fs');

var fileStream = fs.createReadStream('file');

fileStream.on('data', function(data) {

});