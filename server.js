var express = require('express');
var path = require('path');
var app = express();
var request = require('request');
var fs = require('fs')
var port = 3000;





app.listen(port);
console.log('server running on ' + port);