jest.mock("../../../api/rotas/fornecedores/TabelaFornecedor.js");
const Fornecedor = require("../../../api/rotas/fornecedores/Fornecedor");

describe("classe Fornecedor", () => {
  test("o método validar retorne true", () => {
    const fornecedor = new Fornecedor({
      empresa: "FNavas",
      email: "felipefnavas@gmail.com",
      categoria: "tecnologia",
    });
    expect(fornecedor.validar()).toBe(undefined);
  });

  test("o metodo criar foi executado com sucesso", async () => {
    const fornecedor = new Fornecedor({
      empresa: "FNavas",
      email: "felipefnavas@gmail.com",
      categoria: "tecnologia",
    });
    await fornecedor.criar();

    expect(fornecedor.id).toBe(500);
    expect(fornecedor.dataCriacao).toBe("10/12/2022");
    expect(fornecedor.dataAtualizacao).toBe("10/12/2022");
    expect(fornecedor.versao).toBe(1);
  });
});
