import express, { Router } from "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros);
routes.post("/livros", LivroController.cadastrarLivro);
routes.get("/livros/:id", LivroController.ListarLivroPorId)
routes.patch("/livros/:id", LivroController.atualizarLivro)
routes.delete("/livros/:id", LivroController.deletarLivro)


export default routes