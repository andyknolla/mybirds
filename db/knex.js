var environment = process.env.NODE_ENV || 'developement';
var config = require('../knexfile')[environment];
var knex = require('knex')(config);
