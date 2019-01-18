//var Promise = require('bluebird');
let request = require('request');
let rp = require('request-promise');
console.log('server file called');
var array_data = ['a', 'b', 'c', 'd', 'e'];



// var promises = [];
// for(let i = 0; i < array_data.length; i++) {
//     var promise = request.post({url: 'http://localhost:3000',form : {key:array_data[i]}});
// }

// var page = 0;
// var last_page = array_data.length;

// (function loop() {
//     if (page < last_page) {
//         request.post({
//             url: 'http://localhost:3000',
//             form: 'test=' + array_data[page]
//         }, function (error, response, body) {
//             page++;
//             loop();
//         });
//     }
// }());


// //Not working because we are using for loop
// async function loopAsync() {
//     for (let i = 0; i < array_data.length; i++) {
//         await request.post({
//             url: 'http://localhost:3000',
//             form: 'test=' + array_data[i]
//         });
//     }
// }
// loopAsync();


// async function loopAsync() {
//     var page = 0;
//     var last_page = array_data.length;
//     while (page < last_page) {
//         await request.post({
//             url: 'http://localhost:3000',
//             form: 'test=' + array_data[page]
//         });
//         page++;
//     }
// }
// loopAsync();

//If you not use request-promise library then you can go with it.
// async function loopAsync() {
//     var page = 0;
//     var last_page = array_data.length;
//     while (page < last_page) {
//         await new Promise((resolve, reject) => {
//             request.post({
//               url: 'http://localhost:3000',
//               form: 'test=' + array_data[page]
//              }, function(err,httpResponse,body){
//                if (err) reject(err);
//                else resolve({httpResponse,body});
//              });
//              page++;
//         });
//     }
// }
// loopAsync()


//with the use of request-promise library 
async function loopAsync() {
    var page = 0;
    var last_page = array_data.length;
    while (page < last_page) {
        var options = {
            method: 'POST',
            uri: 'http://localhost:3000',
            body: {
                test: array_data[page]
            },
            json: true // Automatically stringifies the body to JSON
        };
        await rp(options);
        page++;
    }
}
loopAsync();


 
