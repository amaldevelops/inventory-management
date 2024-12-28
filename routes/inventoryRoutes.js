const { Router } = require("express");

const inventoryRouter = Router();

const inventoryController = require("../controllers/inventoryController");

inventoryRouter.get("/", inventoryController.getAllInventoryItems);

// inventoryRouter.get("/",
//  (req,res) =>{

//     const {select_view}=req.query;
//     console.log(select_view);
//     inventoryController.getItemsByCategory(select_view,res)
//  }

// );

inventoryRouter.get("/admin", inventoryController.adminDashboard);

module.exports = inventoryRouter;
