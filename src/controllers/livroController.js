import livro from "../models/livros.js";

class LivroController {
 
    static async ListarLivros (req, res) {
      try{
        const listaLivros = await livro.find();
        res.status(200).json(listaLivros);
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha ao listar os livros`})
      }
    }

    static async ListarLivroPorId (req, res) {
      try{
        const id = req.params.id;
        const livroEncontrado = await livro.findById(id);
        res.status(200).json(livroEncontrado);
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha ao listar o livro`})
      }
    }

    static async cadastrarLivro (req, res){
      try{
        const novoLivro = await livro.create(req.body);
        res.status(201).json({message:"criado com sucesso", livro: novoLivro})
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha ao cadastrar o livro`})
      }
    }

    static async atualizarLivro (req, res) {
      try{
        const id = req.params.id;
        await livro.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Livro atualizado"});
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha em atualizar o livro`})
      }
    }

    static async deletarLivro (req, res) {
      try{
        const id = req.params.id;
        await livro.findByIdAndDelete(id);
        res.status(200).json({ message: "Livro deletado com sucesso!"});
      }catch(erro){
        res.status(500).json({message: `${erro.message} : Falha em deletar o livro`})
      }
    }


};

export default LivroController;
