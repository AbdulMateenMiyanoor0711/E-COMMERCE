const express = require("express");
const app = express();
const port = 5000;
const auth = require("./../backend/routes/auth.route");
const admin = require("./../backend/routes/admin.route");
const sellerinfo = require("./../backend/routes/sellerinfo.route");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(auth);
app.use(admin);
app.use(sellerinfo);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port = ${port}`);
});
