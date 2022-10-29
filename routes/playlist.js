const express = require('express');
const router = express.Router();
const PlaylistController = require('../controllers/playlist.controller');
const AuthJwt = require('../middlewares/auth');

// Create playlist for auth here
// router.use(AuthJwt.verifyToken);

router.post('/create', PlaylistController.createPlaylist );
router.delete('/delete', PlaylistController.deletePlaylist );
router.put('/addSong', PlaylistController.addASongToPlaylist);
router.put('/removeSong', PlaylistController.addASongToPlaylist);

module.exports = router;