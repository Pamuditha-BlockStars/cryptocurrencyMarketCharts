const express = require('express');
const router = express.Router();

const {
    getCriptoPrice,
} = require('../controllers/chartViewController');

const {
    getBTCPrices,
    getBNBPrices,
    getETHPrices,
    getAllPrices
} = require('../controllers/getPrices');

//API call to binance
router.get("/get", getCriptoPrice);

//API call to mongooDB
router.get("/getbtc", getBTCPrices);
router.get("/getbnb", getBNBPrices);
router.get("/geteth", getETHPrices);
router.get("/getall", getAllPrices);

module.exports = router;