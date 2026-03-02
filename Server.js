import express from "express";
import { Livro } from "./ClasseLivro.js";
import { Biblioteca } from "./ClasseBiblioteca.js";

const app = express();
const BibliotecaPrincipal = new Biblioteca();

app.get('/livros', (req, res) => {
    const lista = BibliotecaPrincipal.listarLivros();
    res.status(200).json(lista);
});

app.post('/addlivros', (req, res) => {
    const { titulo, autor, isbn, anoPublicacao, disponivel } = req.body;
    const novolivro = new Livro(titulo, autor, isbn, anoPublicacao, disponivel);
    const resultado = BibliotecaPrincipal.adicionarLivro(novolivro);
    if (resultado) {
        res.status(201).json({ mensagem: "Livro adicionado com sucesso!", dados: resultado });
    } else {
        res.status(400).json({ erro: "Dados invalidos!!!" });
    }
});

app.get('/livros/:isbn', (req, res) => {
    const { isbn } = req.params;
    const livro = BibliotecaPrincipal.buscarPorIsbn(isbn);
    if (livro) {
        res.status(200).json(livro);
    } else {
        res.status(404).json({ erro: "Livro não encontrado!" });
    }
});

app.delete('/livros/:isbn', (req, res) => {
    const { isbn } = req.params;
    const removido = BibliotecaPrincipal.removerLivro(isbn);
    if (removido) {
        res.status(200).json({ mensagem: "Livro removido com sucesso!" });
    } else {
        res.status(404).json({ erro: "Livro não encontrado!" });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor de Biblioteca rodando na porta http://localhost:${PORT}`);
});