const dotenv = require('dotenv');
dotenv.config();
const app = {
      port: process.env.PORT
};
module.exports = app;