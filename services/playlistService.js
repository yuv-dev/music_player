const Playlist = require('../models/Playlist');

const createPlaylist = async (data) => {
    //createPlaylist service logic here

    try {
        const playlistObjToBeStoredInDb = {
            name: data.name,
            username: data.username
        }

        const newPlaylist = await Playlist.create(playlistObjToBeStoredInDb);
        return newPlaylist;

    } catch (err) {
        console.log(err);
    }

};

const deletePlaylist = async (data) => {
    //deletePlaylist service logic here
    let query = {
        name: data.name,
        username: data.username
    };

    try {
        const deletedPlaylist = await Playlist.findOneAndDelete(query);
        return deletedPlaylist;

    } catch (err) {
        console.log(err);
    }

};

module.exports = {
    createPlaylist,
    deletePlaylist
}
