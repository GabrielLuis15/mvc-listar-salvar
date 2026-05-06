const model = require("../models/fornecedorModel");

exports.index = (req, res) => {
  const fornecedores = model.listar();
  res.render("fornecedores/index", { fornecedores });
};

exports.salvar = (req, res) => {
  model.salvar({
    nome: req.body.nome,
    cnpj: req.body.cnpj
  });
  res.redirect("/fornecedores");
};