const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const BTCPrice = new Schema({
    date : String,
    time : String,
    BTCprice : String
});

//convert schema into a model
const btcPrice = mongoose.model("BTCPrice", BTCPrice);

//export our module to controller
module.exports =btcPrice;