import mongoose from "mongoose";
import {autorSchema} from "./Autor.js";

const livroSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectId},
  titulo:{
    type: String, 
    require: [true, "O titulo do livro é obrigatorio"]},
  editora:{
    type: String,
    require: [true, "A editora do livro é obrigatorio"]},
  preco:{type: Number},
  paginas:{type: Number},
  autor: autorSchema

}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;