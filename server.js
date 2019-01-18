let express = require('express');
let bodyParser = require('body-parser')
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/', function (req, res) {
   console.log(req.body.test);
   res.status(200).send('ok');
});

var server = app.listen(3000, function () {
    console.log('ok');
});