const mongoose = require('mongoose');
const cors = require('cors');

//now create the schema
const { Schema }= mongoose;

const ETHPrice = new Schema({
    date : String,
    time : String,
    ETHprice : String
});

//convert schema into a model
const ethPrice = mongoose.model("ETHPrice", ETHPrice);

//export our module to controller
module.exports = ethPrice;