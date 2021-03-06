var express = require("express");

var app = module.exports = express();

var bodyParser = require("body-parser");

var allowCors  = function(req, res, next){
    res.header('Access-Control-Allow-Origin', 'http://localhost:5000/');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
}

app.listen(5000);

app.use(allowCors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended : true
}));

