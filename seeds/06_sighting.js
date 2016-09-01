
exports.seed = function(knex, Promise) {
      return Promise.all([
        knex('sighting').insert({
          bird_id: 1,
          member_id: 2,
          location_id: 3,
          sighting_date: '2016-09-19 03:14:07',
          description:'Saw this buddy hopping around in a tree after we climbed at The Crags'
        }),
        knex('sighting').insert({
          bird_id: 2,
          member_id: 1,
          location_id: 2,
          sighting_date: '2016-09-19 03:14:07',
          description: 'We went on a walk from our campsite and saw this guy flying around from tree to tree.  Neat!'
        }),
        knex('sighting').insert({
          bird_id: 1,
          member_id: 1,
          location_id: 2,
          sighting_date: '2016-09-19 03:14:07',
          description: 'My first Lesser Goldfinch!'
        }),
        knex('sighting').insert({
          bird_id: 3,
          member_id: 3,
          location_id: 3,
          sighting_date: '2016-09-19 03:14:07',
          description: 'Saw near Galvanize while on a walk'
        })
    ]);
};
