# 🧺 Produtos e Categorias

Essa é uma aplicação backend simples para firmar conceitos básicos aprendidos no quarto módulo do curso de Desenvolvimento Web Full Stack da Kenzie Academy Brasil.

## 🗒 Sobre

Esta é uma API para criar tanto categorias quanto produtos e associá-los.

## 💻 Tecnologias

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.JS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

## 🔧 Ferramentas

- Dotenv
- Jest
- Nodemon
- pg
- Sucrase
- Supertest
- UUID

## 🧐 Como utilizar

Para iniciar este projeto, é necessário instalar as dependências. Portanto utilize o comando abaixo para instalar tais dependências:

`yarn install`

Crie um arquivo `.env` para configurar as variáveis de ambiente para conectar-se ao seu banco do PostgreSQL. Siga como base o arquivo `.env.example` disposto na raiz do projeto para configurar as variáveis:

```
DB_USER=
DB_PASSWORD=
DB_HOST=
DB=
DB_PORT=
```

## 📌 Endpoints

### 1. Categories

→ _Criação de Categoria_

`POST /categories - Formato da Requisição`

```json
{
    "name": "Eletrodomésticos"
}
```

`POST /categories - Formato da Resposta - STATUS 201`

```json
{
    "message": "Category created",
    "category": {
      "id": "4",
      "name": "Eletrodomésticos"
    }
}
```

→ _Listagens da Categoria_

`GET /categories - Formato da Resposta - STATUS 200`

```json
[
  {
    "id": "1",
    "name": "Eletrodomésticos"
  },
  {
    "id": "2",
    "name": "Móveis"
  }
]
```

`GET /categories/:category_id - Formato da Resposta - STATUS 200`

```json
[
  {
    "id": "1",
    "name": "Eletrodomésticos"
  }
]
```

→ _Atualização de Categoria_

`PATCH /categories/:category_id - Formato da Requisição`

```json
{
  "name": "Automóveis"
}
```

`PATCH /categories/:category_id - Formato da Resposta - STATUS 200`

```json
{
  "message": "Category updated",
  "category": {
    "id": "4",
    "name": "Automóveis"
  }
}
```

→ _Deleção de Categoria_

`DELETE /categories/:category_id - Formato da Requisição - STATUS 204`

```json
Sem necessidade de corpo da requisição
```

<hr />

### 2. Products

→ _Criação de Produto_

`POST /products - Formato da Requisição`

```json
{
  "name": "Geladeira Eletrolux",
  "price": 1399.99,
  "category_id": "4"
}
```

`POST /products - Formato da Resposta - STATUS 201`

```json
{
  "message": "Product created",
  "product": {
    "id": "18c7189a-1247-42da-8aee-1a9579be362e",
    "name": "Geladeira Eletrolux",
    "price": "1399.99",
    "category_id": 4
  }
}
```

→ _Listagens de Produto_

`GET /products - Formato da Resposta - STATUS 200`

```json
[
  {
    id": "18c7189a-1247-42da-8aee-1a9579be362e",
    "name": "Geladeira Eletrolux",
    "price": "1399.99",
    "category_id": 4
  },
  {
    "id": "7dcd4b98-5e8b-4089-8748-65c815d83bca",
    "name": "Fogão Brastemp",
    "price": "1399.99",
    "category_id": 4
  }
]
```

`GET /products/:product_id - Formato da Resposta - STATUS 200`

```json
{
  "id": "18c7189a-1247-42da-8aee-1a9579be362e",
  "name": "Geladeira Eletrolux",
  "price": "1399.99",
  "category_id": 4
}
```

`GET /products/category/:category_id - Formato da Resposta - STATUS 200`

```json
[
  {
    "name": "Geladeira Eletrolux",
    "price": "1399.99",
    "category": "Eletrodomésticos"
  },
  {
    "name": "Fogão Brastemp",
    "price": "1399.99",
    "category": "Eletrodomésticos"
  }
]
```

→ _Atualização de Produto_

`PATCH /products/:product_id - Formato da Requisição`

```json
{
  "name": "Fogão Consul"
}
```

`PATCH /products/:product_id - Formato da Resposta - STATUS 200`

```json
{
  "message": "Atualizado",
  "product": {
    "id": "7dcd4b98-5e8b-4089-8748-65c815d83bca",
    "name": "Fogão Consul",
    "price": "1399.99",
    "category_id": 4
  }
}
```

→ _Deleção de Produto_

`DELETE /products/:product_id - Formato da Requisição - STATUS 204`

```json
Sem necessidade de corpo da requisição
```

<hr/>
