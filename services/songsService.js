const Song = require('../models/Song');

const addSong = async (data) => {
    //addSong api logic here
    try {

        const songObjToBeAddedToDb = {
            name: data.name,
            details: data.details || null,
            genre: data.genre || null,
            popularity: data.popularity || null
        }
        const song = await Song.create(songObjToBeAddedToDb);
        return song;
    } catch (err) {
        console.log(err)
    }
};

const removeSong = async (data) => {
    //removeSong api logic here
    console.log(req.params);
    let queryObj = {
        _id: data._id
    }
    try {

        const deletedSong = await Song.findOneAndDelete(queryObj);
        return deletedSong;
    } catch (err) {
        console.log(err)
    }
};

const searchSongByName = async (data) => {
    //searchSongByName api logic here
    let queryObj = {
        name: data.name
    }
    try {

        const song = await Song.find(queryObj);
        return song;
    } catch (err) {
        console.log(err)
    }
};

const searchSongByGenre = async (data) => {
    //searchSongByGenre api logic here

    let queryObj = {
        genre: data.genre
    }
    try {

        const song = await Song.find(queryObj);
        return song;
    } catch (err) {
        console.log(err)
    }
};

const getAllSongs = async (data) => {
    //getAllSong api logic here

    try {

        const songs = await Song.find();
        return songs;
    } catch (err) {
        console.log(err)
    }
};

const updateSong = async (data) => {
    //addSong api logic here
    try {
        const { params, body } = data;
        const query = {
            _id: params._id
        }
        const song = await Song.find(query);
        console.log(song)

        song.name = song.name === undefined ? body.name : song.name;
        song.details = song.details === undefined ? body.details : song.details;
        song.genre = song.genre === undefined ? body.genre : song.genre;
        song.popularity = song.popularity ? body.popularity : song.popularity;


        const updatedSong = await song.save()

        return updatedSong;
    } catch (err) {
        console.log(err)
    }
};


module.exports = {
    addSong,
    removeSong,
    searchSongByName,
    searchSongByGenre,
    getAllSongs,
    updateSong
};
