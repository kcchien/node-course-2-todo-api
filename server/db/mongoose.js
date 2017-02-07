/**
 * Created by KC on 29/01/2017
 */

let mongoose = require('mongoose');
let mongodbServer = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(mongodbServer);

module.exports = { mongoose };