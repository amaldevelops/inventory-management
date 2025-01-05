const { Router } = require("express");

const inventoryRouter = Router();

const inventoryController = require("../controllers/inventoryController");

inventoryRouter.get("/", inventoryController.getAllInventoryItems);

inventoryRouter.get("/viewitem/:viewItem",inventoryController.getItemById);

inventoryRouter.get("/admin", inventoryController.adminDashboard);

inventoryRouter.get("/editproduct", inventoryController.editProduct);

inventoryRouter.get("/addproduct", inventoryController.addProduct);

inventoryRouter.put("/deleteproduct", inventoryController.deleteProduct)

module.exports = inventoryRouter;

