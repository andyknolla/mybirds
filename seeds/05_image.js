
exports.seed = function(knex, Promise) {
      return Promise.all([
        knex('image').insert({
          image_url: 'http://www.tringa.org/images/8833_Lesser_Goldfinch_08-16-2007_1.jpg',
          bird_id: 1,
        }),
        knex('image').insert({
          image_url: 'http://www.whatbird.com/forum/uploads/gallery/album_3575/med_gallery_14025_3575_41495.jpg',
          bird_id: 2,
        }),
        knex('image').insert({
          image_url: 'http://www.ownbyphotography.com/Audubons-Warbler.jpg',
          bird_id: 3
        })
      ]);
};
