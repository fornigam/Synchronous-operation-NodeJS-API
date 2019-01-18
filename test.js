var request = require('request');
const waitFor = (ms) => new Promise(r => setTimeout(r, ms));
['a','b','c','d','e'].forEach(async (num) => {
  await waitFor(50);
    request.post({url: 'http://localhost:3000',form : 'test='+num}, function(error, response, body){
        console.log(body);
    });
  console.log(num);
});
console.log('Done');
