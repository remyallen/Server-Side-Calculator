var express = require('express');
var router = express.Router();
var path = require('path');

function divide(x, y) {
    return parseInt(x) / (y);
};

router.post('/', function(req, res) {
    console.log(req.body);
    var number = divide(req.body.xValue, req.body.yValue);
    res.send(number.toString());
});

module.exports = router;
