var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('user').select().first().then(function(data) {
    res.render('index', {users: data });
  })
});

module.exports = router;
