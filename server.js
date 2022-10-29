//app 

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const ServerConfig = require('../src/configs/server.config');
const dbConfig = require('../src/configs/db.config');
const reqLogger = require('./middlewares/logger');

const User = require('./models/User');
const Playlist = require('./models/Playlist');
const song = require('./models/Song');
const PlaylistService = require('./services/playlistService');

const PORT = ServerConfig.port || 8080; // port at which server listening

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(reqLogger.log);

/**
 * Setup the MongoDb connection and create admin user
 */
mongoose.connect(dbConfig.DB_URL, async () => {
  console.log('Connected to DB...');

  try {
    if (await User.collection.countDocuments() > 0) {
      await User.collection.drop();
    }
    if (await Playlist.collection.countDocuments() > 0) {
      await Playlist.collection.drop();
    }
    // await Album.collection.drp();
    // await Song.collection.drop();

    // Create Seed data
    var user = await User.create({
      username: 'yuv321',
      email: 'yuv321@gmail.com',
      password: bcrypt.hashSync('qwerty123', 8)
    });
    console.log(user);

    var playlist = await PlaylistService.createPlaylist({
      username: 'yuv321',
      name: 'Oda'
    });
    console.log(playlist);

  } catch (err) {
    console.log(err.message);
  }
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


// fetch routes
let userRouter = require('./routes/user');
let playlistRouter = require('./routes/playlist');
let songRouter = require('./routes/songs');

//define root routes.
app.use('/users', userRouter);
app.use('/playlists', playlistRouter);
app.use('/songs', songRouter);


app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);
