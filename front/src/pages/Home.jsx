// Importações de bibliotecas e hooks
import { useState, useEffect } from "react";
import api from "../api";
import "./HomeStyle.css";

// Função Home que renderiza o componente Home
function Home() {
  // Declaração de variáveis de estado
  const [title, setTitle] = useState(""); // Estado para o título do livro
  const [author, setAuthor] = useState(""); // Estado para o autor do livro
  const [books, setBooks] = useState([]); // Estado para a lista de livros
  const [editing, setEditing] = useState(null); // Estado para o livro que está sendo editado

  // Função que executa a busca dos livros no carregamento da página
  useEffect(() => {
    fetchBooks();
  }, []);

  // Função que busca os livros
  const fetchBooks = async () => {
    // Requisição GET para a API
    try {
      const response = await api.get("/");
      setBooks(response.data); // Atualiza o estado de livros com a resposta da API
    } catch (error) {
      // Tratamento de erro
      console.log("Erro ao buscar livros: ", error);
    }
  };

  // Função que insere ou atualiza um livro
  const handlerSubmit = async () => {
    // Requisição POST ou PUT para a API
    try {
      // Se o livro está sendo editado atualiza o livro
      if (editing) {
        await api.put(`updateItem/${editing.id}`, {
          title,
          author,
        });
        setEditing(null); // Reseta o estado de edição
      }

      // Se o livro não está sendo editado insere um novo livro
      else {
        await api.post("/insertItem", {
          title,
          author,
        });
      }

      // Limpa os campos de título e autor e atualiza a lista de livros
      setTitle("");
      setAuthor("");
      fetchBooks();
    } catch (error) {
      // Tratamento de erro
      console.error("Erro ao inserir/atualizar dados: ", error);
    }
  };

  // Função que deleta um livro
  const handleDelete = async (id) => {
    // Requisição DELETE para a API
    try {
      await api.delete(`/deleteItem/${id}`);
      fetchBooks(); // Atualiza a lista de livros
    } catch (error) {
      // Tratamento de erro
      console.log("Erro ao deletar livro: ", error);
    }
  };

  // Função que edita um livro
  const handleEdit = (book) => {
    setTitle(book.title); // Preenche o campo de título com o título do livro
    setAuthor(book.author); // Preenche o campo de autor com o autor do livro
    setEditing(book); // Defini o livro que está sendo editado
  };

  // Renderização do componente Home
  return (
    <div>
      <h1>Inserir Novo Item</h1>
      <form onSubmit={handlerSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="autor">Autor:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">{editing ? "Atualizar" : "Inserir"} </button>
        {editing && (
          <button
            onClick={() => {
              setEditing(null), setTitle(""), setAuthor("");
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      <h1>Tabela de Livros</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => handleEdit(book)}>Editar</button>
                <button onClick={() => handleDelete(book.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
