
const Album = require('../models/Album');

const createAlbum = async (data) => {
    
    try {
        const {name, songs } = data;
        const albumObjToBeStoredInDb = {
            name : name,
            songs : songs
        }

        const newAlbum = await Album.create(albumObjToBeStoredInDb);
        return newAlbum 

    } catch (err) {
        console.log(err);
    }
};

const playlistService = {
    createAlbum   
}

module.export = albumService;