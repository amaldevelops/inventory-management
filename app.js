const express = require("express");

const app = express();

require("dotenv").config();

const inventoryRouter = require("./routes/inventoryRoutes");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", inventoryRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
