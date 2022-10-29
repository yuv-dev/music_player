if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV
};