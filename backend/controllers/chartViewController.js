const binance = require('../models/chartViewModels')
const btc = require('../models/BTCstoreModels')
const bnb = require('../models/BNBstoreModels')
const eth = require('../models/ETHstoreModels')
const criptoPrice = require('../models/AllPriceStore')

//get All price
const getCriptoPrice = async (req, res)=> {

    setTimeout(async() => {
        //binance API call 
        let ticker = await binance.prices();

        //get price
        var BTCPrice = ticker.BTCBUSD;
        var BNBPrice = ticker.BNBBUSD;
        var ETHPrice = ticker.ETHBUSD;

            var BTCprice = BTCPrice;
            var BNBprice = BNBPrice;
            var ETHprice = ETHPrice;

            var date_ob = new Date();
            var date =  date_ob.getDate()+'/'+date_ob.getMonth();
            var time = date_ob.getHours()+':'+date_ob.getMinutes();

        //console details
        console.log('BTC Price :- ' +BTCPrice+ ' Date :- '+date+ ' Time :- '+time);
        console.log('BNB Price :- ' +BNBPrice+ ' Date :- '+date+ ' Time :- '+time);
        console.log('ETH Price :- ' +ETHPrice+ ' Date :- '+date+ ' Time :- '+time);

        //create object
        const newbtc = new btc({
            date,
            time,
            BTCprice
        });
    
        const newbnb = new bnb({
            date,
            time,
            BNBprice
        });

        const neweth = new eth({
            date,
            time,
            ETHprice
        });

        const newcriptoPrice = new criptoPrice({
            date,
            time,
            BTCprice,
            BNBprice,
            ETHprice
        });

        newbtc.save().then(() => {
            newbnb.save().then(() => {
                neweth.save().then(() => {
                    newcriptoPrice.save().then(()=>{
                        res.json('Get All Details');
                    })
                })
            })
        }).catch((err)=>{
            res.json(err);
        });
        
      }, 6000)

     setInterval(async() => {
               //binance API call 
               let ticker = await binance.prices();

               //get price
               var BTCPrice = ticker.BTCBUSD;
               var BNBPrice = ticker.BNBBUSD;
               var ETHPrice = ticker.ETHBUSD;
       
                   var BTCprice = BTCPrice;
                   var BNBprice = BNBPrice;
                   var ETHprice = ETHPrice;
       
                    var date_ob = new Date();
                    var date =  date_ob.getDate()+'/'+date_ob.getMonth();
                    var time = date_ob.getHours()+':'+date_ob.getMinutes();
       
               //console details
               console.log('BTC Price :- ' +BTCprice+ ' Date :- '+date+ ' Time :- '+time);
               console.log('BNB Price :- ' +BNBprice+ ' Date :- '+date+ ' Time :- '+time);
               console.log('ETH Price :- ' +ETHprice+ ' Date :- '+date+ ' Time :- '+time);
       
               //create object
               const newbtc = new btc({
                   date,
                   time,
                   BTCprice
               });
           
               const newbnb = new bnb({
                   date,
                   time,
                   BNBprice
               });
       
               const neweth = new eth({
                   date,
                   time,
                   ETHprice
               });

             const newcriptoPrice = new criptoPrice({
                 date,
                 time,
                 BTCprice,
                 BNBprice,
                 ETHprice
             });

             newbtc.save().then(() => {
                 newbnb.save().then(() => {
                     neweth.save().then(() => {
                         newcriptoPrice.save().then(()=>{
                             //res.json('Get All Details');
                         })
                     })
                 })
               }).catch((err)=>{
                   res.json(err);
               });

      }, 3600000)

}

module.exports = {
getCriptoPrice
}