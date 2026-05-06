const fs = require("fs");
const path = require("path");
const caminho = path.join(__dirname, "../data/fornecedores.json");

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
function salvar(fornecedor) {
  let fornecedores = lerDados();
  const novo = {
    id: fornecedores.length > 0 ?
      fornecedores[fornecedores.length - 1].id + 1 :
      1,
    nome: fornecedor.nome,
    cnpj: fornecedor.cnpj
  };
  fornecedores.push(novo);
  salvarDados(fornecedores);
}

module.exports = {
  listar,
  salvar
};