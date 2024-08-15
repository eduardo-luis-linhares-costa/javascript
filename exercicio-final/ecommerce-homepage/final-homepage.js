const grelhas = document.getElementById('containers')

const produtos = () => {
    fetch('https://fakestoreapi.com/products').then((response) => response.json())
        .then((data) => {
            data.map((produto) => {
                
                const novaDiv = document.createElement('div');
                novaDiv.id = 'produtos';

                const produtosLeft = document.createElement('div');
                const produtosRight = document.createElement('div');
                produtosRight.id = 'produtosright'

                const titulo = document.createElement('h2');
                titulo.innerText = produto.title;

                const img = document.createElement('img');
                img.src = produto.image;
                img.width = 250;
                img.height = 150;

                const button = document.createElement('button');
                button.id = 'botao'
                button.innerText = 'Add to cart';

                button.addEventListener('click', () => {
                    const productId = produto.id;
                    const quantity = 1; 

                    
                    const payload = {
                        userId: 1, 
                        date: new Date().toISOString().split('T')[0],
                        products: [
                            {
                                productId: productId,
                                quantity: quantity
                            }
                        ]
                    };

                    fetch('https://fakestoreapi.com/carts/7', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                });
                
                novaDiv.append(produtosLeft);
                novaDiv.append(produtosRight)
                produtosLeft.append(titulo);
                produtosRight.append(img);
                produtosRight.append(button);
                grelhas.append(novaDiv)
            })

        })
        .catch(error => {
            console.error(error);
        });

}


produtos();


