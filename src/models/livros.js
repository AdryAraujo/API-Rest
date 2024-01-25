import mongoose from "mongoose";
import {autorSchema} from "./Autor.js";

const livroSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectId},
  titulo:{
    type: String, 
    required: [true, "O titulo do livro é obrigatorio"]},
  editora:{
    type: String,
    required: [true, "A editora do livro é obrigatorio"]},
  preco:{type: Number},
  paginas:{
    type: Number,
    min: [10, "O número de páginas deve estar entre 10 e 2000"],
    max: [2000, "O número de páginas deve estar entre 10 e 2000"]},
  autor: autorSchema

}, {versionKey: false});

const livro = mongoose.model("livros", livroSchema);

export default livro;