//Importa express
const express = require("express");
//Importamos todos los controladores
const {
  getChildrens,
  getChildrenByID,
  deleteChildren,
  createChildren,
  updateChildren,
} = require("../controllers/children.controller");

//Creamos el router
const ChildrenRouter = express.Router();
//Definimos las rutas
ChildrenRouter.get("/", getChildrens);
ChildrenRouter.get("/byid/:id", getChildrenByID);
ChildrenRouter.post("/", createChildren);
ChildrenRouter.patch("/:id", updateChildren);
ChildrenRouter.delete("/:id", deleteChildren);

module.exports = ChildrenRouter;
