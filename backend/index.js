const express = require("express");
const app = express();
const port = 5000;
const auth = require("./../backend/routes/auth.route");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(auth);

app.get("/", (req, res) => {
  res.send("Hello World!");
}
);

app.listen(port, () => {
  console.log(`Server is running on port = ${port}`);
});
