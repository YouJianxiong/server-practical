var express = require('express');
var router = express.Router();

/* test */
router.get('/', function(req, res, next) {
    res.send('the server is activated!');
});

module.exports = router;