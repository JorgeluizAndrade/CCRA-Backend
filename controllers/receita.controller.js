const Receita = require("../models/receita.models");

const getReceitas = async (req, res) => {
  try {
    const receitas = await Receita.find();  
    res.status(200).json(receitas);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getReceita = async (req, res) => {
  try {
    const receita = await Receita.findById(req.params.id);
    res.status(200).json(receita);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getReceita,
  getReceitas,
};
