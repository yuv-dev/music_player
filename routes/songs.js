const express = require("express");
const router = express.Router();
const SongsController = require('../controllers/songs.controller');

// Create routes for user here

router.post('/', SongsController.addSong);
router.delete('/delete/{:id}', SongsController.removeSong);
router.get('/name', SongsController.searchSongByName);
router.get('/genre', SongsController.searchSongByGenre);
router.get('/', SongsController.getAllSongs);
router.put('/:id', SongsController.removeSong);

module.exports = router;