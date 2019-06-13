let express = require('express');
var bodyParser = require('body-parser');
let morgan = require('morgan');
require('dotenv').config();

const PORT = 3001;

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(morgan('dev'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api', require('./api'));

app.listen(PORT, (err) => {
    if(err) throw err;
    console.log('* Listening on Port * : ' + PORT);
});