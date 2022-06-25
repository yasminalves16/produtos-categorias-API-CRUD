import app from "../src/app";
import request from "supertest";

let testCategory = {
  name: `Categoria Teste ${Math.floor(Math.random() * 10001)}`,
};

let testProduct = {
  name: `Produto Teste ${Math.floor(Math.random() * 10001)}`,
  price: `${Math.floor(Math.random() * 1001)}.${
    Math.floor(Math.random() * 90) + 10
  }`,
};

describe("Testes rota /categories", () => {
  it("Testando criacao de categoria", async () => {
    const response = await request(app).post("/categories").send(testCategory);

    testCategory.id = response.body.category.id;
    testProduct.category_id = response.body.category.id;

    expect(response.status).toBe(201);
    expect(response.body.message).toBeDefined();
    expect(response.body.category.id).toBeDefined();
    expect(response.body.category.name).toContain("Categoria Teste");
  });

  it("Testando listagem de todas as categorias", async () => {
    const response = await request(app).get("/categories");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].name).toContain("Categoria Teste");
  });

  it("Testando listagem de uma categoria", async () => {
    const response = await request(app).get(`/categories/${testCategory.id}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toContain("Categoria Teste");
  });

  it("Testando atualizacao de uma categoria especifica", async () => {
    const response = await request(app)
      .patch(`/categories/${testCategory.id}`)
      .send({
        name: `${testCategory.name} Atualizada`,
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBeDefined();
    expect(response.body.category.name).toContain("Atualizada");
  });
})


describe("Testes rota /products", () => {
  it("Testando criacao de produto", async () => {
    const response = await request(app).post("/products").send(testProduct);

    testProduct.id = response.body.product.id;

    expect(response.status).toBe(201);
    expect(response.body.message).toBeDefined();
    expect(response.body.product.id).toBeDefined();
    expect(response.body.product.name).toContain("Produto Teste");
  });

  it("Testando listagem de todas os produtos", async () => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].name).toContain("Produto Teste");
  });

  it("Testando listagem de um produto", async () => {
    const response = await request(app).get(`/products/${testProduct.id}`);

    expect(response.status).toBe(200);
    expect(response.body.name).toContain("Produto Teste");
  });

  it("Testando atualizacao de um produto especifico", async () => {
    const response = await request(app)
      .patch(`/products/${testProduct.id}`)
      .send({
        name: `${testProduct.name} Atualizado`,
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBeDefined();
    expect(response.body.product.name).toContain("Atualizado");
  });

  it("Testando listagem de produtos por id da categoria", async () => {
    const response = await request(app).get(
      `/products/category/${testCategory.id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty("category");
  });

  it("Testando delecao de um produto", async () => {
    const response = await request(app).delete(`/products/${testProduct.id}`);

    expect(response.status).toBe(204);
  });

  it("Testando delecao de uma categoria", async () => {
    const response = await request(app).delete(
      `/categories/${testCategory.id}`
    );

    expect(response.status).toBe(204);
  });
});


describe("Testando casos de erro nas rotas /categories e /products", () => {
  afterAll(async () => {
    await request(app).delete(`/products/${testProduct.id}`);
    await request(app).delete(`/categories/${testCategory.id}`);
  });

  let testCategory = {
    name: `Categoria Teste`,
  };

  let testProduct = {
    name: `Produto Teste ${Math.floor(Math.random() * 10001)}`,
    price: `${Math.floor(Math.random() * 1001)}.${
      Math.floor(Math.random() * 90) + 10
    }`,
  };

  it("Nao permite criacao de duas categorias com nomes iguais", async () => {
    const successResponse = await request(app)
      .post("/categories")
      .send(testCategory);

    const errorResponse = await request(app)
      .post("/categories")
      .send(testCategory);

    testCategory.id = successResponse.body.category.id;
    testProduct.category_id = successResponse.body.category.id;

    expect(errorResponse.status).toBe(400);
    expect(errorResponse.body.message).toBeDefined();
  });

  it("Nao permite a criacao de um produto sem o nome", async () => {
    const response = await request(app)
      .post("/products")
      .send({ price: "1000.00", category_id: Number(testCategory.id) });

    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
  });

  it("Nao permite a criacao de um produto sem o preco", async () => {
    const response = await request(app)
      .post("/products")
      .send({ name: "Produto teste", category_id: Number(testCategory.id) });

    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
  });

  it("Nao permite listar uma categoria inexistente", async () => {
    const response = await request(app).get("/categories/id_test");

    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
  });

  it("Nao permite atualizar uma categoria inexistente", async () => {
    const response = await request(app)
      .patch("/categories/id_test")
      .send({ name: "Teste" });

    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
  });

  it("Nao permite listar um produto inexistente", async () => {
    const response = await request(app).get("/products/id_test");

    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
  });

  it("Nao permite atualizar um produto inexistente", async () => {
    const response = await request(app)
      .patch("/products/id_test")
      .send({ name: "Teste" });

    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
  });

  it("Nao permite deletar uma categoria inexistente", async () => {
    const response = await request(app).delete("/categories/id_test");

    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
  });

  it("Nao permite atualizar um produto inexistente", async () => {
    const response = await request(app).delete("/products/id_test");

    expect(response.status).toBe(400);
    expect(response.body.message).toBeDefined();
  });
});
