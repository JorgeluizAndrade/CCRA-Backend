const express = require("express");

const  ReceitasRoute = require("./route/receita.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

app.use("/api", ReceitasRoute);

module.exports = app;