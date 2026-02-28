
export class Biblioteca{
    constructor(){
        this.livros = [];
    }



    //Metodo Adicionar Livro

    adicionar(livro){
        console.log(`Adicionar Livro`);
        const anoAtual = new Date().getFullYear();

        if( !(livro.anoPublicacao > anoAtual) && livro.isbn.length == 13 ){
            console.log(`Livro ${livro.titulo} adicionado`);
            this.livros.push(livro);
        }else if(livro.anoPublicacao > anoAtual){
            console.log(`Livro ${livro.titulo} não adicionado por ter ano de publicação futuro.`);
        }else if(livro.isbn.length != 13){
            console.log(`Livro ${livro.titulo} não adicionado por ter ISBN inválido.`);
        }

    }

    listar(){
        console.log(`Listar Livros`);
        this.livros.forEach(l => {
            console.log(`Titulo: ${l.titulo} - Autor: ${l.autor} - ISBN: ${l.isbn} - Ano de Publicação: ${l.anoPublicacao} - Disponível: ${l.disponivel}`);
        })
    }

    buscarPorISBN(isbn){
        console.log(`Buscar por ISBN: ${isbn}`);
        const livro = this.livros.find(l => l.isbn === isbn);
        if(livro){
            console.log(`Livro encontrado: ${livro.titulo}`);
            console.log(`Titulo: ${livro.titulo} - Autor: ${livro.autor} - ISBN: ${livro.isbn} - Ano de Publicação: ${livro.anoPublicacao} - Disponível: ${livro.disponivel}`);
        }else{
            console.log(`Livro com ISBN ${isbn} não encontrado.`);
        }
     }

     removerLivro(isbn){
        console.log(`Remover Livro com ISBN: ${isbn}`);
        const index = this.livros.findIndex(l => l.isbn === isbn);
        if(index !== -1){
            this.livros.splice(index, 1);
            console.log(`Livro com ISBN ${isbn} removido.`);
        }else{
            console.log(`Livro com ISBN ${isbn} não encontrado.`);
        }
     }}

