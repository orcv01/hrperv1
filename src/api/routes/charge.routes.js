//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getCharges,
  getChargeByID,
  getChargeByName,
  deleteCharge,
  createCharge,
  updateCharge,
} = require("../controllers/charge.controller");

//Creamos el router
const ChargeRouter = express.Router();
//Definimos las rutas
ChargeRouter.get("/", getCharges);
ChargeRouter.get("/byid/:id", getChargeByID);
ChargeRouter.get("/byname/:name", getChargeByName);
ChargeRouter.post("/", createCharge);
ChargeRouter.patch("/:id", updateCharge);
ChargeRouter.delete("/:id", deleteCharge);

module.exports = ChargeRouter;
