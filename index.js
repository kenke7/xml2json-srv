var express = require('express'),
  request = require('request'),
  xml2json = require('xml2json');

var app = express();

app.get('/', function (req, res) {
  var url = decodeURIComponent(req.query.url);

  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set('Content-Type', 'application/json');

  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(xml2json.toJson(body, {
        object: false,
        reversible: false,
        coerce: true,
        sanitize: true,
        trim: true,
        arrayNotation: false
      }));
    } else {
      res.status(500).send(error || response.statusCode);
    }
  });
});

app.listen(8080, function () {
  console.log('xml2json-srv listening on 8080...');
});
