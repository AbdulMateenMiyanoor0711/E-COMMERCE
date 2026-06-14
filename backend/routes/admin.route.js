const express = require("express");
const admin = require("./../controllers/admin.controller");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const jsonParser = express.json();