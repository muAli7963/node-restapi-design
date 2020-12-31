const mongoose = require('mongoose');

const {config} = require('../config/dev.js')

 const connect = (url = config.dbUrl, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, useUnifiedTopology: true , useNewUrlParser: true }
  )
}
module.exports = {connect}