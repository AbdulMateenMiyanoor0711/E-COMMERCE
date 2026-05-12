const express = require("express");
const auth = require("./../controllers/auth.controller");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const jsonParser = express.json();

router.get("/get-user", async (req, res) => {
  try {
    const data = await auth.getUser();
    res.status(200).send({
      data: data,
      msg: "succes",
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

module.exports = router;
