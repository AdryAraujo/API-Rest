import { autor } from "../models/Autor.js";
import livro from "../models/livros.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

class LivroController {

  static async ListarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find();
      res.status(200).json(listaLivros);
    }catch(erro){
      next(erro);
    }
  }

  static async ListarLivroPorId(req, res, next) {      
    try {
      const id = req.params.id;
      const livroEncontrado = await autor.findById(id);
      if(livroEncontrado !== null){
        res.status(200).json(livroEncontrado);
      }else{
        next(new NaoEncontrado("Livro não cadastrado"));
      }
    }catch(erro){
      next(erro);
    }
  }

  static async listarLivrosPorEditora(req, res, next) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    }catch(erro){
      next(erro);
    }
  }

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
    }catch(erro){
      next(erro);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndUpdate(id, req.body);
      if(livroEncontrado !== null){
        res.status(200).json(livroEncontrado);
      }else{
        next(new NaoEncontrado("Livro não cadastrado"));
      }
      res.status(200).json({ message: "Livro atualizado" });
    }catch(erro){
      next(erro);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndDelete(id);
      if(livroEncontrado !== null){
        res.status(200).json(livroEncontrado);
      }else{
        next(new NaoEncontrado("Livro não cadastrado"));
      }
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    }catch(erro){
      next(erro);
    }
  }


}

export default LivroController;
