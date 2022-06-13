const btc = require('../models/BTCstoreModels')
const bnb = require('../models/BNBstoreModels')
const eth = require('../models/ETHstoreModels')
const criptoPrice = require('../models/AllPriceStore')

//get btc prices
const getBTCPrices = async (req, res) => {

    var date_ob = new Date();
    var date =  date_ob.getDate()+'/'+date_ob.getMonth();

    //get data
    await btc.find(
        {
        "date": date
    }
    ).then((btc) => {
        res.json(btc);
    }).catch((err) => {
        res.json(err);
    })
}

//get bnb prices
const getBNBPrices = async (req, res)=> {

    var date_ob = new Date();
    var date =  date_ob.getDate()+'/'+date_ob.getMonth();

    await bnb.find(
        {
            "date": date
        }
    ).then((bnb)=>{
        res.json(bnb);
    }).catch((err)=>{
        res.json(err);
    })
}

//get btc prices
const getETHPrices = async (req, res)=> {

    var date_ob = new Date();
    var date =  date_ob.getDate()+'/'+date_ob.getMonth();

    await eth.find(
        {
            "date": date
        }
    ).then((eth)=>{
        res.json(eth);
    }).catch((err)=>{
        res.json(err);
    })
}

//get All prices
const getAllPrices =  async (req, res)=> {

    var date_ob = new Date();
    var date =  date_ob.getDate()+'/'+date_ob.getMonth();

    await criptoPrice.find(
        {
            "date": date
        }
    ).then((criptoPrice)=>{
        res.json(criptoPrice);
    }).catch((err)=>{
        res.json(err);
    })
}
module.exports = {
    getBTCPrices,
    getBNBPrices,
    getETHPrices,
    getAllPrices
}