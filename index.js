import { Livro } from "./ClasseLivro.js";
import { Biblioteca } from "./ClasseBiblioteca.js";
const BibliotecaPrincipal = new Biblioteca();

const l1 = new Livro("Erick", "Erick", "1234567890123",2025,true);
const l2 = new Livro("MAtheus", "Matheus", "1234567890",2025,true);
const l3 = new Livro("Rebeca", "rebeca", "1234567890123",2027,true);

BibliotecaPrincipal.adicionar(l1);
BibliotecaPrincipal.adicionar(l2);
BibliotecaPrincipal.adicionar(l3);

BibliotecaPrincipal.listar();

BibliotecaPrincipal.buscarPorISBN("1234567890123");
BibliotecaPrincipal.buscarPorISBN("1234567890");