
export class Biblioteca{
    constructor(){
        this.livros = [];
    }



    //Metodo Adicionar Livro

    adicionar(livro){
        console.log(`Adicionar Livro`);

        if( !(livro.anoPublicacao > 2026) && livro.isbn.length == 13 ){
            console.log(`Livro ${livro.titulo} adicionado`);
            this.livros.push(livro);
        }else{
            console.log(`Livro ${livro.titulo} não adicionado.`);
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



}

