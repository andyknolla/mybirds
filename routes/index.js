var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex');

/* GET home page, where user selects their name  */
router.get('/', function(req, res, next) {
  knex('username').then(function(data) {
    console.log(data[0].username, ' = username data')
    res.render('index', { username: data });
  })
});

// go to adduser page
router.get('/adduser', function(req,res,next) {
  res.render('adduser');
})


/*  GET user specific home page, which will list that user's birds */
router.get('/userhome/:id', function(req, res,next) {
  console.log('userhome page route goes');
  knex('bird').select(
    'bird.id as birdID',
    'username.id as userID',
    'bird.name',
    'bird.image_url',
    'bird.location'
  ).join('username', function() {
    this.on('user_id', '=', 'username.id')
  }).where('username.id', '=', req.params.id).first()
    .then(function(data) {
      console.log(data, ' = bird/user join tabe data');
    res.render('userhome', { birds: data })
    console.log(birds,'birds');
  }).catch(function(err) {
    console.log('error message', err);
  })
})

// router.get('/', function(req,res,next) {
//   // console.log('works')
//   knex('bird').select().then(function(data) {
//     console.log(data[0], 'home data');
//     res.render('home', {birds:data})
//   });
// })

/* add user */
router.post('/adduser', function(req, res, next) {
  console.log('dirka');
  knex('username').insert(req.body).then(function() {
    res.redirect('/')
  })
})


router.post('/:id', function(req, res, next) {
var data = {
  name:req.body.name,
  image_url:req.body.image_url,
  location:req.body.location
}
  knex('bird').insert(data).then(function() {
    res.redirect('/home' + req.params.id);
  }).catch(function(error) {
    next(error);
  })
})


module.exports = router;
