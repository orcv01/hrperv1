//Importar las dependencias y configurar el dotenv
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
//Importar la conexión a la db.
const connect = require("./src/utils/db");

//Server
const server = express();
//Connect
connect();
//Parser
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
const CompanyRouter = require("./src/api/routes/company.routes");
server.use("/companys", CompanyRouter);

//Ruta para derivar cuando no hay una válida
server.use("*", (req, res) => {
  res.end("Route not found");
});

//Listen
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
