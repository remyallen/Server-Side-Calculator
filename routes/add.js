var express = require('express');
var router = express.Router();
var path = require('path');

function sum(x, y) {
    return parseInt(x) + parseInt(y);
};

router.post('/', function(req, res) {
    console.log(req.body);
    var number = sum(req.body.xValue, req.body.yValue);
    res.send(number.toString());
});

module.exports = router;