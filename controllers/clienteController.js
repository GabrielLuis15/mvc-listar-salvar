const model = require("../models/clienteModel");

exports.index = (req, res) => {
  const clientes = model.listar();
  res.render("clientes/index", { clientes });
};

exports.salvar = (req, res) => {
  model.salvar({
    nome: req.body.nome,
    email: req.body.email
  });
  res.redirect("/clientes");
};