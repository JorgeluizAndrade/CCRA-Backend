const mongoose = require("mongoose");
const Receita = require("../models/receita.models");
const  receitas  = require("../data/receita");

require("dotenv").config();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {});
    Receita.insertMany(receitas);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
