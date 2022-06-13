const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const CriptoPrice = new Schema({
    date : String,
    time : String,
    BTCprice : String,
    BNBprice : String,
    ETHprice : String
});

//convert schema into a model
const criptoPrice = mongoose.model("CriptoPrice", CriptoPrice);

//export our module to controller
module.exports = criptoPrice;