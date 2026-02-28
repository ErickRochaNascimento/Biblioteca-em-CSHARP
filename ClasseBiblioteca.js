
export class Biblioteca{
    constructor(){
        this.livros = [];
    }



    //Metodo Adicionar Livro

    adicionar(livro){
        console.log(`Adicionar Livro`);

        if( !(livro.anoPublicacao > 2026) && livro.isbn.length == 13 ){
            console.log(`Livro ${livro.titulo} adicionado`);
        }else{
            console.log(`Livro ${livro.titulo} não adicionado.`);
        }

    }





}

