import { autor, livro } from "../models/index.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

class LivroController {

  static async ListarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find();
      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro);
    }
  }

  static async ListarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await autor.findById(id);
      if (livroEncontrado !== null) {
        res.status(200).json(livroEncontrado);
      } else {
        next(new NaoEncontrado("Livro não cadastrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if(busca !== null){
        const livrosResultado = await livro.find(busca._id);
      }else {
        res.status(200).send([]);
      }
    } catch(erro) {
      next(erro);
    }
  };

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } };
      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndUpdate(id, req.body);
      if (livroEncontrado !== null) {
        res.status(200).json(livroEncontrado);
      } else {
        next(new NaoEncontrado("Livro não cadastrado"));
      }
      res.status(200).json({ message: "Livro atualizado" });
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndDelete(id);
      if (livroEncontrado !== null) {
        res.status(200).json(livroEncontrado);
      } else {
        next(new NaoEncontrado("Livro não cadastrado"));
      }
      res.status(200).json({ message: "Livro deletado com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  }
}

async function processaBusca(parametros) {
  const { editora, titulo, nomeAutor } = parametros;

  let busca = {};
  const regexTit = new RegExp(titulo, "i");
  const regexEdit = new RegExp(editora, "i");
  const regexAut = new RegExp(nomeAutor, "i");
  if (editora) busca.editora = regexEdit;
  if (titulo) busca.titulo = regexTit;
  if (nomeAutor) {
    const autores = await autor.findOne({ nomeAutor: regexAut });
    if (autores !== null) {
      busca.autores = autores._id;
    } else {
      busca = null;
    }
  }
  return busca;
}

export default LivroController;
