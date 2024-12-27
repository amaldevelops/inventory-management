const express = require("express");

const app = express();

require("dotenv").config();

const inventoryRouter = require("./routes/inventoryRoutes");

app.set("view engine", "ejs");

const path=require("path");
const assetsPath=path.join(__dirname,"public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use("/", inventoryRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});
