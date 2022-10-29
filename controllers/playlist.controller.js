const Playlist = require('../models/Playlist');
const PlaylistService = require('../services/playlistService');

const createPlaylist = async (req, res) => {
    //createPlaylist api logic here     
    try {

        const playlist = await Playlist.findOne({
            name: req.body.name,
            username: req.body.username
        });
        console.log(playlist);  
        if (playlist) {
            return res.status(400).send({
                success: false,
                message: "Playlist with the name already exists for the user"
            });
        }

        const newPlaylist = await PlaylistService.createPlaylist(req.body);
        
        return res.status(200).json({
            success: true,
            message: 'Successfully created album',
            data: newPlaylist
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Some Internal Error!'
        });
    }

};

const deletePlaylist = async (req, res) => {
    //deletePlaylist api logic here
    try {
        const playlist = await Playlist.find({
            name: req.params.name,
            username: req.username
        });
        if (!playlist) {
            return res.status(400).send({
                success: false,
                message: "Playlist not found"
            });

        }

        const deletedPlaylist = await PlaylistService.deletePlaylist(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully deleted album',
            data: deletedPlaylist
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Some Internal Error!'
        });
    }

};

const addASongToPlaylist = async (req, res) => {
    //addASongToPlaylist api logic here

    try {
        const playlist = await Playlist.find({ playlistName: req.body.playlistName, username: req.username });
        if (!playlist) {
            return res.status(400).send({ message: "Playlist not found" });
        }
        playlist.songs.push(req.body.songId);

        const updatedPlaylist = await playlist.save();

        return res.status(200).json(updatedPlaylist);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: 'Some Internal Error!' });

    }

};

const removeSongFromPlaylist = async (req, res) => {
    //removeSongFromPlaylist api logic here

    try {
        const playlist = await Playlist.find({
            playlistName: req.body.playlistName,
            username: req.username
        });
        if (!playlist) {
            return res.status(400).send({
                success: false,
                message: "Playlist not found"
            });
        }
        for (let i = 0; i < playlist.songs.length; i++) {
            if (playlist.songs[i] === req.songId) {
                playlist.songs.splice(i, 1);
                break;
            }
        }

        const updatedPlaylist = await playlist.save();

        return res.status(200).json(updatedPlaylist);
    } catch (err) {
        console.log(err);
        return res.status(200).send({ message: 'Some Internal Error!' });

    }
};
const PlaylistController = {
    createPlaylist,
    deletePlaylist,
    addASongToPlaylist,
    removeSongFromPlaylist
};

module.exports = PlaylistController;