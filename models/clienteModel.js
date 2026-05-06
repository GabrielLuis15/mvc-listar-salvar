const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "../data/clientes.json");

function lerDados() {
  const dados = fs.readFileSync(caminho);
  return JSON.parse(dados);
}

function listar() {
  return lerDados();
}

function salvarDados(dados) {
  fs.writeFileSync(
    caminho,
    JSON.stringify(dados, null, 2)
  );
}
function salvar(cliente) {
  let clientes = lerDados();
  const novo = {
    id: clientes.length > 0 ?
      clientes[clientes.length - 1].id + 1 :
      1,
    nome: cliente.nome,
    email: cliente.email
  };
  clientes.push(novo);
  salvarDados(clientes);
}

module.exports = {
  listar,
  salvar
};