var express = require('express');
var router = express.Router();
var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/hero_app_assessment');
mongoose.model('Hero',
  new Schema({
      "alias": String,
      "first_name": String,
      "last_name": String,
      "city": String,
      "power_name": String
    },
    {
      collection: 'Heroes'
    }
  )
);

var Hero = mongoose.model('Hero');

mongoose.model('SuperPower',
  new Schema({
      "power_name": String
    },
    {
      collection: 'SuperPowers'
    }
  )
);

var SuperPower = mongoose.model('SuperPower');

router.post('/', function(req, res) {
  console.log('request body::', req);

  var addedHero = new Hero({
    "alias": req.body.alias,
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
    "city": req.body.city,
    "power_name": req.body.power_name
  });

  addedHero.save(function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    } else {
      res.send(true);
    }
  });
});

router.get('/', function(req, res) {
  console.log('request body::', req);

  Hero.find({}, function(err, data) {
    if(err) {
      console.log('ERR: ', err);
    }
    res.send(data);
  });
});


module.exports = router;
