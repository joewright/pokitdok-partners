var express = require('express');
var PokitDok = require('pokitdok-nodejs');

var pokitdok = new PokitDok(process.env.POKIT_CLIENT_ID, process.env.POKIT_SECRET);
var app = express();

app.use(express.static('public'));

var tradingRouter = express.Router();
tradingRouter.get('/', function(req, res) {
  pokitdok.tradingPartners(tradingResHandler(req, res));
});
tradingRouter.get('/:id', function(req, res) {
  pokitdok.tradingPartners({
    id: req.params.id
  }, tradingResHandler(req, res));
});

function tradingResHandler(req, res) {
  return function(err, data) {
    if (err) {
      res.status(500).end();
      return console.log(err, res.statusCode);
    }
    res.send(data);
  };
}

app.use('/trading-partners', tradingRouter);

var server = app.listen(process.env.PORT || 3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});