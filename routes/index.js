var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var request = require('request');
var Exercise = mongoose.model('Exercise');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Fitster' });
});

router.get('/exercises', function(req, res, next){
  Exercise.find(function(err, exercises){
    if(err){ return next(err);}
    res.json(exercises);
  });
});

router.post('/exercises', function(req, res, next){
  var exercise = new Exercise(req.body);

  exercise.save(function(err, post){
    if(err){return next(err);}
    res.json(exercise);
  });
});

router.param('exercise', function(req, res, next, id){
  var query = Exercise.findById(id);

  query.exec(function(err, exercise){
    if(err){ return next(err);}
    if(!exercise){return next(new Error('Cannot find exercise'));}

    req.exercise = exercise;
    return next();
  });
});

router.get('/exercises/:exercise', function(req,res){
  res.json(req.exercise);
});

router.delete('/exercises/:exercise', function(req, res){
  Exercise.findById(req.exercise).then(function(exercise){
    return exercise.remove();
  }).then(function(){
    console.log("delete");
    res.json({message: 'Deleted!'});
  });
});

router.get('/bls',function(req,res){
  request({
        "url":"http://api.bls.gov/publicAPI/v2/timeseries/data/",
        "method":"POST",
        "headers":{
          "Content-Type":"application/json"
        },
        "body":'{"seriesid":["SMU06310840000000001", "SMU06401400000000001" ]}'
      }, handlePost);

  function handlePost(err, response, body){
    if(!err && response.statusCode < 400){
      var info = JSON.parse(body);
      res.json(info);
    } else {
      console.log(err);
      console.log(response.statusCode);
    }
  }

});


module.exports = router;
