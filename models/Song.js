// Song Model
const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   details: {
      type: String,
   },
   genre: {
      type: String,
   },
   popularity: {
      type: Number
   }
},
   {
      timestamps: true
   });

module.exports = mongoose.model('Song', songSchema); 