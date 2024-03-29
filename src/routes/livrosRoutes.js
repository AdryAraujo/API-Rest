import express, { Router } from "express";
import LivroController from "../controllers/livroController.js";
import paginar from "../middlewares/paginar.js";

const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros, paginar);
routes.post("/livros", LivroController.cadastrarLivro);
routes.get("/livros/busca", LivroController.listarLivroPorFiltro);
routes.get("/livros/:id", LivroController.ListarLivroPorId);
routes.patch("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro);


export default routes;