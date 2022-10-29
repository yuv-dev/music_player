// Album Model
const mongoose = require('mongoose');
const {album} = require('../utils/constants');

const albumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, album.name],
        trim: true
    },
    rating: {
        type: Number,

    },
    artists: {
        type: [String],

    },
    songs: {
        type: [mongoose.SchemaTypes.ObjectId],
        ref: 'Song'
    }

},
    {
        timestamps: true
    });

module.exports = mongoose.model('Album', albumSchema); 
