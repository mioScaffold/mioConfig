const path = require('path');
process.env["NODE_CONFIG_DIR"] = path.join(__dirname, '../../configs');
const config = require('config');

module.exports = config;