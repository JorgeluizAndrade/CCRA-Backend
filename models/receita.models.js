const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReceitaSchema = new Schema({
  nome: String,
  ingredientes: [String],
  instrucoes: [String],
  imagem: String,
});

const Receita = mongoose.model("Receita", ReceitaSchema);

module.exports = Receita;
