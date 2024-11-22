// Importando o express para criação de rotas
const express = require("express");

// Importando o cors para permitir requisições de outros domínios
const cors = require("cors");

// Importando as funções de manipulação do banco de dados
const {
  getAllItens,
  insertItem,
  deleteItem,
  updateItem,
} = require("./allItens");

// Criando uma instância do express
const app = express();

// Definindo que a aplicação vai usar o cors e json
app.use(cors());
app.use(express.json());

// Definindo a porta que a aplicação vai rodar
const port = 3003;

// Definindo que a aplicação vai rodar na porta definida
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Criando a rota GET para buscar todos os itens
app.get("/", async (req, res) => {
  // Busca todos os itens usando a função getAllItens
  try {
    const itens = await getAllItens();
    res.send(itens);
  } catch (e) {
    // Tratamento de erro
    res.status(400).send(e.message);
  }
});

// Criando a rota POST para inserir um item
app.post("/insertItem", async (req, res) => {
  // Recebe o título e autor do item a ser inserido no corpo da requisição
  const { title, author } = req.body;

  // Insere o item usando a função insertItem
  try {
    const item = await insertItem(title, author);
    res.status(201).json(item);
  } catch (e) {
    // Tratamento de erro
    res.status(500).json({ error: e.message });
  }
});

// Criando a rota DELETE para deletar um item
app.delete("/deleteItem/:id", async (req, res) => {
  // Recebe o id do item a ser deletado nos parâmetros da requisição
  const { id } = req.params;

  // Deleta o item usando a função deleteItem
  try {
    await deleteItem(id);
    res.status(204).end();
  } catch (e) {
    // Tratamento de erro
    res.status(500).json({ error: e.message });
  }
});

// Criando a rota PUT para atualizar um item
app.put("/updateItem/:id", async (req, res) => {
  // Recebe o id do item a ser atualizado nos parâmetros da requisição
  const { id } = req.params;

  // Recebe o título e autor do item a ser atualizado no corpo da requisição
  const { title, author } = req.body;

  // Atualiza o item usando a função updateItem
  try {
    await updateItem(id, title, author);
    res.status(204).end();
  } catch (e) {
    // Tratamento de erro
    res.status(500).json({ error: e.message });
  }
});
