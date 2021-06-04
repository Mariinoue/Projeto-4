  
const livros = require('./database');

livros.sort(function (a, b) {
	
	return (a.paginas > b.paginas) ? 1 : ((b.paginas > a.paginas) ? -1 : 0);
 
});

const pegarEntrada = require('readline-sync');

const encontrarLivros = pegarEntrada.question('Deseja encontrar livros pela categoria?  (S/N)');

if (encontrarLivros.toLocaleUpperCase() === 'S'){
    console.log('Esses são as categorias');
    console.log('Ficcao');

    const qualCategoria = pegarEntrada.question('Qual categoria deseja?');

    const categoria = livros.filter(livro => livro.categoria === qualCategoria);

    console.log(categoria);
    
} else{
    console.log('Essas sao as categorias');
    console.log(livros);
}

const recomendacao = pegarEntrada.question('Deseja recomendaco de livros para ler?  (S/N)');

if (recomendacao.toLocaleUpperCase() === 'S'){
    console.log('Essas são as recomendações');

    const recomenda = livros.filter(livro => livro.recomenda === true);

    console.log(recomenda);
    
} else{
    
}
const desejo = pegarEntrada.question('Deseja ver a lista de desejos?  (S/N)');

if (desejo.toLocaleUpperCase() === 'S'){
    console.log('Essa é a lista de desejos: ');

    const deseja = livros.filter(livro => livro.leu === false);

    console.log(deseja);
    
} else{
    
}