/* const soma = (a, b) => {
    const total = a + b;
  
    const promise = new Promise((resolve, reject) => {
      if (total % 2 == 0) {
        resolve("é par");
      } else {
        reject("é impar");
      }
    
    })
    return promise
  };
  
  
  const somarAsync = async (a,b) => {
      try{ 
        const result = await soma(a,b);
        console.log(result)
       }
      catch(nel){
        console.log(nel)
      }
    };   
  
  
    somarAsync(1,2);
  
  
  
    /*________________________________________________________________ */
  
  
  
  /* const nomeProf = (nome) => {
  
    const promise = new Promise((resolve, reject) => {
      if(nome === 'vitor' ) {
        resolve (nome) 
      } else {
        reject ('não é um nome')
      }
    });
    return promise
  };
  
  nomeProf('vitor')
  .then( (result) => {console.log(result)})
  .catch( (error) => {console.log(error)});
  
  
  
   const nomeAsync = async (nome) => {
    try{
    const result = await nomeProf(nome);
    console.log(result) }
    catch(error) {
      console.log(error)
    }
  }; 
  
  nomeAsync('pedro');
  
  
  _______________________________________//_________________________________________________________


  const butoes = document.querySelectorAll('button');

  const container = document.querySelectorAll('.container button');

  const p = document.getElementById('teste');



  const novoElemento = document.createElement('div');
  document.body.append(novoElemento);
  novoElemento.append('Isto é apenas para um exercício');
  novoElemento.prepend('muito difícil');

  novoElemento.setAttribute('aria-label', 'teste-teste');





  
const botao = document.querySelectorAll('button');

botao[0].onmouseover = () => console.log('mouseover');
botao[1].onmouseover = () => console.log('mouseover');


botao[0].addEventListener('mouseout', () => console.log('mouseout'));
botao[1].addEventListener('mouseout', () => console.log('mouseout'));

 /*botao.array.forEach(element => {
  element.onmouseover = () => console.log('mouseover')
}); -------- no caso de haver varios items dentro do array 'botao' isto 
iria percorrer todos os indices */

/* setTimeout( () => botao[0].setAttribute('id', 'test'), 2000)




const captureEvent = (event) => {console.log(event)};

botao[0].addEventListener('click', captureEvent);
botao[1].addEventListener('click', captureEvent);


const div1 = document.createElement('div');
const atributo = document.createAttribute('atributo');
atributo.value = 'teste';

div1.setAttributeNode(atributo);

*/


/* 
const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
event.preventDefault();

const formDatas = new FormData(form);

const nome = formDatas.get('nome');
const email = formDatas.get('email');
const mensagem  = formDatas.get('mensagem');

console.log(`Nome : ${nome}`);
console.log(`Email : ${email}`);
console.log(`Mensagem : ${mensagem}`);

});   */



/* const novaDiv = document.createElement('div');

novaDiv.innerHTML = '<ul>' + '<li>um</li>' + '<li>dois</li>' +  '</ul>'

document.body.append(novaDiv) */


/*  
forma mais por extenso de resolver 

const ul = document.createElement('ul')

const li = document.createElement('li')
const liDois = document.createElement('li')

ul.appendChild(li)
ul.appendChild(liDois)

novaDiv.appendChild(ul)   */

/*

const segundaLi = document.querySelector('li');

segundaLi.insertAdjacentHTML('afterend', '<li>tres</li>');


const paragrafo = document.createElement('p')
paragrafo.append('isto é uma div') 

document.body.appendChild(paragrafo)

paragrafo.remove();  */



/* const novaSpan = document.createElement('span');

novaSpan.innerHTML = 'teste'

document.body.append(novaSpan)

novaSpan.addEventListener('click', () => {
  novaSpan.classList.add('outraclass')
});



const botao = document.createElement('button');
botao.innerHTML = 'teste'

document.body.append(botao);

botao.addEventListener('mouseover', () => {
  botao.classList.add('umaclass')
});

botao.addEventListener('mouseout', () => {
  botao.classList.remove('umaclass')
}); */




/* 
const request = new XMLHttpRequest();

request.open('GET', 'https://api.jikan.moe/v4/top/anime', true);
request.send();
request.responseType = "json";

request.addEventListener("load", () => {
  const animes = request.response.data;
console.log(animes);

animes.forEach(element => {
  //console.log(element.year < 2000)
  element.year === 2023 ? console.log(element) : console.log('o ano nao tem conteudos')
})

}
);  */

/*
const yearAnime = (ano) => {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://api.jikan.moe/v4/top/anime', true);
  request.send();
  request.responseType = "json";
  
  request.addEventListener("load", () => {
    const animes = request.response.data;
  console.log(animes);
  

  const animeYear = animes.filter(element => element.year === ano);
  console.log(animeYear)
  }
  );
}

yearAnime(2023) */

