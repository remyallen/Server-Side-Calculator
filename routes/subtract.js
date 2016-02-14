var express = require('express');
var router = express.Router();
var path = require('path');

function diff(x, y) {
    return parseInt(x) - parseInt(y);
};

router.post('/', function(req, res) {
    console.log(req.body);
    var number = diff(req.body.xValue, req.body.yValue);
    res.send(number.toString());
});

module.exports = router;