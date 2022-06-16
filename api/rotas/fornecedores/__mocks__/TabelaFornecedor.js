module.exports = {
  listar() {
    return [];
  },
  inserir(fornecedor) {
    return {
      id: 500,
      dataCriacao: "10/12/2022",
      dataAtualizacao: "10/12/2022",
      versao: 1,
    };
  },
  async pegarPorId(id) {
    return {
      id: 500,
      dataCriacao: "10/12/2022",
      dataAtualizacao: "10/12/2022",
      versao: 1,
    };
  },
  async atualizar(id, dadosParaAtualizar) {},
  async remover(id) {},
};
