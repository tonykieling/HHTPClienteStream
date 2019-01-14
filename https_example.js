var https = require('https');

// console.log('I did it!');


var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');

  response.on('data', function (chunck){
    console.log('[-- CHUNCK OF LENGTH ' + chunck.length + ' --]');
    console.log(chunck.toString());
  });
  console.log("Response: ", response);
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");