const express = require("express");

const {
  getReceitas,
  getReceita,
} = require("../controllers/receita.controller");


const router = express.Router();

router.get("/receitas", getReceitas);
router.get("/receitas/:id", getReceita);


module.exports = router;