//index.js로 이름 지으면 폴더 request 할 때 자동으로 불러옴
const mongoose = require("mongoose");

const User = require('./User');
const Coin = require('./Coin');
const Asset = require('./Asset');
const Key = require('./Key');

const mongoURL = 'mongodb+srv://roh:1q2w3e4r!!@testmongo.svjf0.mongodb.net/coinServer?retryWrites=true&w=majority'
mongoose.connect(mongoURL);

module.exports = {
    User,
    Coin,
    Asset,
    Key,
}
// object로 하면 여러 개의 정의들을 보낼 수 있음
