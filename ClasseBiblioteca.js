
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

    


}

