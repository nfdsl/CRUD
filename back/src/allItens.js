// Importa o arquivo de conexão com o banco de dados
const connection = require("./connection");

// Função que busca todos os itens no banco de dados
const getAllItens = async () => {
  // Criacao e execução da query de busca de todos os itens
  try {
    const query = "SELECT * FROM crud_2042_3.book";
    const [dados] = await connection.execute(query);
    return dados;
  } catch (e) {
    // Tratamento de erro
    throw new Error(`Erro ao buscar itens: ${e}`);
  }
};

// Função que insere um novo item pegando o título e autor do item a ser inserido
const insertItem = async (title, author) => {
  // Criacao e execução da query de inserção de um item
  try {
    const query = "INSERT INTO crud_2042_3.book (title, author) VALUES (?, ?)";
    const [result] = await connection.execute(query, [title, author]);
    return result;
  } catch (e) {
    // Tratamento de erro
    throw new Error(`Erro ao inserir item: ${e}`);
  }
};

// Função que deleta um item pegando o seu id para ser deletado
const deleteItem = async (id) => {
  // Criacao e execução da query de deleção de um item
  try {
    const query = "DELETE FROM crud_2042_3.book WHERE id = ?";
    const [result] = await connection.execute(query, [id]);
    return result;
  } catch (e) {
    // Tratamento de erro
    throw new Error(`Erro ao deletar item: ${e}`);
  }
};

// Função que atualiza um item pegando o seu id, título e autor
const updateItem = async (id, title, author) => {
  // Criacao e execução da query de atualização de um item
  try {
    const query = "UPDATE crud_2042_3.book SET title = ?, author = ? WHERE id = ?";
    const [result] = await connection.execute(query, [title, author, id]);
    return result;
  } catch (e) {
    // Tratamento de erro
    throw new Error(`Erro ao atualizar item: ${e}`);
  }
};

// Exporta as funções para serem usadas em outros arquivos
module.exports = {
  getAllItens,
  insertItem, 
  deleteItem,
  updateItem,
};
