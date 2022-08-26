const express = require("express");
const { getProfitability } = require("../controllers/btcInfo");

const router = express.Router();

router.get("/api/", getProfitability);

module.exports = router;
