const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const BNBPrice = new Schema({
    date : String,
    time : String,
    BNBprice : String
});

//convert schema into a model
const bnbPrice = mongoose.model("BNBPrice", BNBPrice);

//export our module to controller
module.exports = bnbPrice;