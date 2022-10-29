const songsService = require('../services/songsService');

const addSong = async (req, res) => {
    //addSong api logic here
    try {
        const song = await songsService.addSong(req.body);
        return res.status(201).json({
            success: true,
            message: 'Song successfully added!',
            data: song
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Somthing went wrong!',
        });
    }
};

const removeSong = async (req, res) => {
    //removeSong api logic here
    try {
        console.log(req.params);
        const song = await songsService.removeSong(req.params);
        return res.status(200).json({
            success: true,
            message: 'Song successfully removed!',
            data: song
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Somthing went wrong!',
        });
    }
};

const searchSongByName = async (req, res) => {
    //searchSongByName api logic here
    try {
        const songs = await songsService.searchSongByName(req.body);
        return res.status(200).json({
            success: true,
            message: 'Song list by name is here!',
            data: songs
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Somthing went wrong!',
        });
    }
};

const searchSongByGenre = async (req, res) => {
    //searchSongByGenre api logic here
    try {
        const songs = await songsService.searchSongByGenre(req.body);
        return res.status(200).json({
            success: true,
            message: 'Song list by genre is here!',
            data: songs
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Somthing went wrong!',
        });
    }
};

const getAllSongs = async (req, res) => {
    //searchSongByName api logic here
    try {
        const songs = await songsService.getAllSongs(req.body);
        return res.status(200).json({
            success: true,
            message: 'Song list by name is here!',
            data: songs
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong!',
        });
    }
};

const updateSong = async (req, res) => {
    //updateSong api logic here
    try {
        let data = {
            params: req.params,
            body: req.body
        };

        const song = await songsService.updateSong(data);
        return res.status(201).json({
            success: true,
            message: 'Song successfully updated!',
            data: song
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong!',
        });
    }
};


const SongsController = {
    addSong,
    removeSong,
    searchSongByName,
    searchSongByGenre,
    getAllSongs,
    updateSong
};

module.exports = SongsController;