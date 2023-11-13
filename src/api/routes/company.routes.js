//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getCompanys,
  getCompanyByID,
  getCompanyByName,
  deleteCompany,
  createCompany,
  updateCompany,
} = require("../controllers/company.controller");

//Creamos el router
const CompanyRouter = express.Router();
//Definimos las rutas
CompanyRouter.get("/", getCompanys);
CompanyRouter.get("/byid/:id", getCompanyByID);
CompanyRouter.get("/byname/:name", getCompanyByName);
CompanyRouter.post("/", createCompany);
CompanyRouter.patch("/:id", updateCompany);
CompanyRouter.delete("/:id", deleteCompany);

module.exports = CompanyRouter;
