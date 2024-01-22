import {autor} from "../models/Autor.js";

class AutorController {
 
    static async ListarAutores (req, res) {
      try{
        const listaAutores = await autor.find();
        res.status(200).json(listaAutores);
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha ao listar os autores`})
      }
    }

    static async ListarAutorPorId (req, res) {
      try{
        const id = req.params.id;
        const autorEncontrado = await autor.findById(id);
        res.status(200).json(autorEncontrado);
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha ao listar o autor`})
      }
    }

    static async cadastrarAutor (req, res){
      try{
        const novoAutor = await autor.create(req.body);
        res.status(201).json({message:"criado com sucesso", livro: novoAutor})
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha ao cadastrar o autor`})
      }
    }

    static async atualizarAutor (req, res) {
      try{
        const id = req.params.id;
        await autor.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Autor atualizado"});
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha em atualizar o autor`})
      }
    }

    static async deletarAutor (req, res) {
      try{
        const id = req.params.id;
        await autor.findByIdAndDelete(id);
        res.status(200).json({ message: "Autor deletado com sucesso!"});
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha em deletar o autor`})
      }
    }


};

export default AutorController;
