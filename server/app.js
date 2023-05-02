require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth.js");
const favouriteRoute = require("./routes/favourite");
const proxyRoute = require("./routes/proxy.js");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", authRoute);
app.use("/favourites", favouriteRoute);
app.use("/proxy", proxyRoute);

app.listen(process.env.PORT, () => {
  console.log("server start ", process.env.PORT);
});
