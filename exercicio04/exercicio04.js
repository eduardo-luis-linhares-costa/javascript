const funcaoAnonima = function() {
    console.log('isto doi demasiado rápido!')
}();


const closureFunction = function(campo){
    return function(valor){
        console.log( `${campo}: ${valor}`)
    }
}

const nome = closureFunction('Nome');

nome('Eduardo');


function produto(nome, valor){
this.nome = nome;
this.valor = valor
};

const novoProduto = new produto('edit', 2000);
console.log(novoProduto);

produto.valor = 2.5

console.log(produto.valor)

const numeroInteiro = Math.floor(produto.valor);
console.log(numeroInteiro)