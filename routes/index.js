var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET request */
router.get('/request', function(req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at:' + req.requestTime + '</small>'
  res.send(responseText)
})

module.exports = router;
