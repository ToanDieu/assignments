const express = require('express');
const cors = require('cors');
const request = require('request')

const app = express();
app.use(cors());
app.use('/', function(req, res) {
    var url = 'https://' +
      req.get('host').replace('localhost:4000', 'www.metaweather.com') + 
      req.url
    req.pipe(request({ qs:req.query, uri: url })).pipe(res);
  })
app.listen(4000);