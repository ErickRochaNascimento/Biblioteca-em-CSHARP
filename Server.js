import express from "express";
import { Livro } from "./ClasseLivro.js";
import { Biblioteca } from "./ClasseBiblioteca.js";


const BibliotecaPrincipal = new Biblioteca();

const l1 = new Livro("Erick", "Erick", "1234567890123", 2025, true);
const l2 = new Livro("MAtheus", "Matheus", "1234567890", 2025, true);
const l3 = new Livro("Rebeca", "rebeca", "1234567890123", 2027, true);
const l4 = new Livro("Rebeca", "rebeca", "1234567890123", 2025, true);

BibliotecaPrincipal.adicionarLivro(l1);
BibliotecaPrincipal.adicionarLivro(l2);
BibliotecaPrincipal.adicionarLivro(l3);
BibliotecaPrincipal.adicionarLivro(l4);

BibliotecaPrincipal.listarLivros();

BibliotecaPrincipal.buscarPorIsbn("1234567890123");
BibliotecaPrincipal.buscarPorIsbn("1234567890");

BibliotecaPrincipal.listarLivros();

const app = express();

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
    const removido = Biblioteca.removerLivro(isbn);
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