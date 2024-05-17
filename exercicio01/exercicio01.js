paises = ['Albânia','Bolívia','Canadá','Dinamarca','Etiópia','Finlândia','Alemanha','Hungria','Irlanda','Japão','Quênia'];
 
/* ciclo que faz console.log de cada um dos paises */


for (let i = 0; i < paises.length; i++) {
    console.log(paises[i])
};

 /* função que devolve o numero de itens do array paises */

const country = (paises) => {
 return paises.length
};

console.log(country(paises));

/* adicionar portugal á primeira posição do array */

const portugal = paises.unshift('Portugal');

console.log(paises);

/* adicionar portugal á ultima posição do array */

const espanha = paises.push('Espanha');
console.log(paises);


/* cconsole.log dos 3 ultimos arrays em uma função */

const threeArrays = (arr) => {
 return arr.slice(-3)
};

console.log(threeArrays(paises));

/* console.log de todos os paises numa só string */

console.log(paises.join(' - '))
