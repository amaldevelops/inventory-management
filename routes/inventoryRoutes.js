const { Router } = require("express");

const inventoryRouter = Router();

const inventoryController = require("../controllers/inventoryController");

inventoryRouter.get("/", inventoryController.getAllInventoryItems);

inventoryRouter.get("/viewItem",inventoryController.getItemById);

inventoryRouter.get("/admin", inventoryController.adminDashboard);

module.exports = inventoryRouter;
