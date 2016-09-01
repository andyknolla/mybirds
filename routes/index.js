var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex');

/* GET home page, where user selects their name  */
router.get('/', function(req, res, next) {
    knex('member').select(
      'member.id',
      'member.username'
    )
    .then(function(data) {
        console.log(data)
        res.render('index', {
            member: data
        });
    })
});

// go to adduser page
router.get('/adduser', function(req, res, next) {
    res.render('adduser');
})


/*  GET user specific home page, which will list that user's birds */
router.get('/userhome/:id', function(req, res, next) {
    console.log('userhome page route goes');
    knex('bird').select(
            'bird.id as birdID',
            'username.id as userID',
            'username.username',
            'bird.name',
            'bird.image_url',
            'bird.location'
        ).join('username', function() {
            this.on('user_id', '=', 'username.id')
        }).where('username.id', '=', req.params.id)
        .then(function(data) {
            console.log(data, req.params.id, ' = bird/user join table data');
            res.render('userhome', {
                user: data[0],
                birds: data,
                id: req.params.id
            });
            // console.log(birds, 'birds');
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
    /* delete user */

/* add a bird */
router.post('/add/:id', function(req, res, next) {
    var data = {
        name: req.body.name,
        image_url: req.body.image_url,
        location: req.body.location,
        description: req.body.description,
        user_id: req.body.user_id
    }
    knex('bird').insert(data).then(function() {
        res.redirect('/userhome/' + req.params.id);
    }).catch(function(error) {
        next(error);
    })
})


/* detail page */
router.get('/userhome/:id/detail/:birdId', function(req, res, next) {
        return Promise.all([
                //get bird where bird.id = req.params.birdId
                knex('bird').where({
                    'bird.id': req.params.birdId
                }).select().first(),
                //get comments where bird_id = req.params.birdId
                knex('comment').where({
                    'bird_id': req.params.birdId
                }).select()

                // knex('comment')
                // .select(
                //     'username.username',
                //     'comment.user_id'
                // )
                // .join('username', 'comment.user_id', '=', 'username.id')
                // .where({
                //     'username.id': req.params.id
                // })
            ])
            .then(function(data) {
                console.log(
                    'all detail data: ', data,
                    'data[0]:', data[0],
                    'data[1]:', data[1]
                    // 'data[2]:', data[2]
                );
                res.render('detail', {
                    bird: data[0],
                    comments: data[1],
                    // commentAuthors: data[2],
                    birdId: req.params.birdId,
                    userId: req.params.id
                })

            })
    })
    // router.get(':id/detail/:birdId', function(req, res, next) {
    //         console.log('detail route goes');
    //         // need join table providing all bird info, userid, and comments
    //         return Promise.all([
    //                 //birds + user
    //                 knex('bird').select(
    //                     'bird.id as birdId',
    //                     'bird.name',
    //                     'bird.location',
    //                     'bird.image_url',
    //                     'bird.user_id'
    //                 ).join('username', function() {
    //                     this.on('bird.user_id', '=', 'username.id')
    //                 }).where(
    //                     'bird.user_id',
    //                     req.params.id
    //                 ),
    //                 //comments + user
    //                 knex('comment').select().join('bird', function() {
    //                     this.on('comment.bird_id', '=', 'bird.id')
    //                 }).where(
    //                     'comment.bird_id',
    //                     req.params.birdId
    //                 )
    //             ])
    //             .then(function(data) {
    //                 console.log(data);
    //                 render('detail', {
    //                     bird: data
    //                 })
    //             })
    //     })

/* delete a bird */
router.get('/:userId/delete/:id', function(req, res, next) {
    console.log('delete routes hits');
    return Promise.all([
            knex('comment').where({
                'bird_id': req.params.id
            }).del(req.body),
            knex('bird').where({
                'id': req.params.id
            }).del(req.body)
        ])
        .then(function() {
            res.redirect('/userhome/' + req.params.userId)
        })
})

// comment on a bird
router.post('/addComment/:userId/:birdId', function(req, res, next) {
    console.log('add comment route hits');
    knex('comment').insert(req.body)
        .then(function(data) {
            res.redirect('/userhome/' + req.params.userId + '/detail/' + req.params.birdId)
        })
})

module.exports = router;
