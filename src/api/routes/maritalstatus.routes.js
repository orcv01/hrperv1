//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getMaritalStatuss,
  getMaritalStatusByID,
  getMaritalStatusByName,
  deleteMaritalStatus,
  createMaritalStatus,
  updateMaritalStatus,
} = require("../controllers/maritalStatus.controller");

//Creamos el router
const MaritalStatusRouter = express.Router();
//Definimos las rutas
MaritalStatusRouter.get("/", getMaritalStatuss);
MaritalStatusRouter.get("/byid/:id", getMaritalStatusByID);
MaritalStatusRouter.get("/byname/:name", getMaritalStatusByName);
MaritalStatusRouter.post("/", createMaritalStatus);
MaritalStatusRouter.patch("/:id", updateMaritalStatus);
MaritalStatusRouter.delete("/:id", deleteMaritalStatus);

module.exports = MaritalStatusRouter;
