# 📚 Gerenciador de Livros

Este é um projeto de um sistema simples de gerenciamento de livros, desenvolvido utilizando uma stack com **Node.js**, **Express**, **MySQL** e **React**. O objetivo é permitir operações básicas em um banco de dados de livros, como inserir, visualizar, editar e excluir registros.

## 🔧 Funcionalidades

- **📖 Cadastro de Livros:** Adicione novos livros informando título e autor.
- **📝 Edição de Livros:** Atualize os dados de livros já cadastrados.
- **🗑️ Exclusão de Livros:** Remova livros do sistema com um clique.
- **📋 Listagem de Livros:** Veja todos os livros cadastrados em uma tabela organizada.

---

## 🛠️ Tecnologias Utilizadas

### Backend
- **[Node.js]:** Ambiente de execução para JavaScript no lado do servidor.
- **[Express]:** Framework minimalista para construção de APIs.
- **[MySQL]:** Banco de dados relacional para persistência dos livros.
- **[Cors]:** Permite a integração entre frontend e backend.

### Frontend
- **[React]:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios:** Cliente HTTP para comunicação com o backend.

---

## 🗂️ Estrutura do Projeto

### **Backend**
1. **`server.js`**
   - Configuração do servidor Node.js com Express.
   - Criação das rotas para CRUD (Create, Read, Update, Delete).

2. **`allItens.js`**
   - Funções responsáveis por interagir com o banco de dados MySQL:
     - Buscar todos os livros.
     - Inserir um novo livro.
     - Atualizar um livro existente.
     - Deletar um livro pelo ID.

3. **`connection.js`**
   - Configuração e conexão com o banco de dados MySQL.

---

### **Frontend**
1. **`Home.js`**
   - Interface principal para o gerenciamento de livros.
   - Contém:
     - Formulário para cadastro/edição.
     - Tabela para listagem e botões para editar ou excluir.
     - Funções para comunicação com a API.

2. **`HomeStyle.css`**
   - Estilização da interface com foco em simplicidade e usabilidade.

3. **`api.js`**
   - Configuração do Axios para facilitar chamadas à API.

---

## 🖥️ Como Rodar o Projeto?

### **Pré-requisitos**
Certifique-se de ter instalado:
- **Node.js** (v16 ou superior)
- **MySQL**
- **NPM** ou **Yarn**

---

### **Passo a Passo**

#### Backend
1. Instale as dependências:
   ```bash
   cd backend
   npm install
