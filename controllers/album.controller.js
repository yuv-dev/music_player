const Album = require('../models/Album');
const AlbumService = require('../services/albumService');


const createAlbum = async (req, res) => {
    //createAlbum api logic here
    try {
        var album = Album.findOne({ name: req.body.name });

        if (album) { //if alrady exists
            return res.status(400).send({
                message: 'album with the name already exists!'
            });
        }

        const newAlbum = await AlbumService.createAlbum(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully created album',
            data: newAlbum
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: 'Some Internal Error!'
        });
    }
};

const AlbumController = {
    createAlbum
};

module.exports = AlbumController;