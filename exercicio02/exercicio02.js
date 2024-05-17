const valorTotal = (preços, desconto) => {
    const percentagemDesconto = desconto / 100;

    if(desconto <= 10 ){
        return preçoFinal = preços + ( preços * percentagemDesconto)       
    } else if (desconto > 10 || desconto < 30) {
        return  preçoFinal = preços - ( preços * percentagemDesconto)
    } else if ( desconto === 0) {
        return preços * 2
    }
}

console.log(valorTotal(100,11))