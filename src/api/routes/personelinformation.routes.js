//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getPersonelInformations,
  getPersonelInformationByID,
  deletePersonelInformation,
  createPersonelInformation,
  updatePersonelInformation,
} = require("../controllers/personelInformation.controller");

//Creamos el router
const PersonelInformationRouter = express.Router();
//Definimos las rutas
PersonelInformationRouter.get("/", getPersonelInformations);
PersonelInformationRouter.get("/byid/:id", getPersonelInformationByID);
PersonelInformationRouter.post("/", createPersonelInformation);
PersonelInformationRouter.patch("/:id", updatePersonelInformation);
PersonelInformationRouter.delete("/:id", deletePersonelInformation);

module.exports = PersonelInformationRouter;
