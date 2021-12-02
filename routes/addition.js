var express = require('express');
var router = express.Router();

/* a + b */
router.post('/', function(req, res, next) {
    const a = req.body.a;
    const b = req.body.b;
    const value = a * 1 + b * 1;

    res.status(200).json({ 'value': value });
});

router.get('/', function(req, res, next) {
    res.send('addition activated!')
});

module.exports = router;