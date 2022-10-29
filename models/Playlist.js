const mongoose = require('mongoose');


const playlistSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   songs: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: 'Song'
   },
   username: {
      type: String,
      ref: 'User',
      required: true
   }

},
   {
      timestamps: true
   });

module.exports = mongoose.model('Playlist', playlistSchema); 
