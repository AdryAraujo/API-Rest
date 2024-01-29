import express, { Router } from "express";
import AutorController from "../controllers/autorController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/autores", AutorController.ListarAutores, paginar);
routes.post("/autores", AutorController.cadastrarAutor);
routes.get("/autores/:id", AutorController.ListarAutorPorId);
routes.patch("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletarAutor);


export default routes;