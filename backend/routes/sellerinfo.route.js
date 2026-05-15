const express = require("express");
const sellerinfo = require("./../controllers/sellerinfo.controller");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const jsonParser = express.json();
router.get("/get-seller-info", async (req, res) => {
  try {
    const data = await sellerinfo.getSellerInfo();
    res.status(200).send({
      data: data,
      msg: "success",
    });
    console.log(data);
  } catch (error) {
    res.status(500).send({
      msg: "error",
      error: error.message,
    });
    console.log("Error:", error.message, error);
  }
});

router.post("/add-seller-info", jsonParser, async (req, res) => {
  try {
  const user_id = req.body.user_id;
  const buiness_name = req.body.business_name;
  const business_email = req.body.business_email;
  const business_address = req.body.business_address;
  const business_phone = req.body.business_phone;
  const tax_id = req.body.tax_id;
  } catch (error) {
    res.status(500).send({
      msg: "error",
      error: error.message,
    });
    console.log("Error:", error.message, error);
  }
});

module.exports = router;
