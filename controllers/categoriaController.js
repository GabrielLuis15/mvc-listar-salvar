const model = require("../models/categoriaModel");

exports.index = (req, res) => {
  const categorias = model.listar();
  res.render("categorias/index", { categorias });
};

exports.salvar = (req, res) => {
  model.salvar({
    nome: req.body.nome
    //email: req.body. email
  });
  res.redirect("/categorias");
};