var request = require('request');
console.log('server file called');
var array_data = ['a','b','c','d','e'];



var promises = [];
for(let i = 0; i < array_data.length; i++) {
    var promise = request.post({url: 'http://localhost:3000',form : {key:array_data[i]}});
}

