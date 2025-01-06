const { Router } = require("express");

const inventoryRouter = Router();

const inventoryController = require("../controllers/inventoryController");

inventoryRouter.get("/", inventoryController.getAllInventoryItems);

inventoryRouter.get("/viewitem/:viewItem", inventoryController.getItemById);

inventoryRouter.post("/admin", inventoryController.adminDashboard);

inventoryRouter.get("/addproduct", inventoryController.addProductPage);
inventoryRouter.post("/addproduct", inventoryController.addProductToDb);

inventoryRouter.get("/editproduct/:itemId", inventoryController.editProduct);
inventoryRouter.post("/editproduct/", inventoryController.editProductToDb);

inventoryRouter.get(
  "/deleteproduct/:itemId",
  inventoryController.deleteProduct
);

module.exports = inventoryRouter;
