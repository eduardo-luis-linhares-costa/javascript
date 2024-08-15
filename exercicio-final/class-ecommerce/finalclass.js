

class Ecommerce {

    constructor(Id, price, name) {
        this.produtos = [],
        this.Id = Id;
        this.price = price;
        this.name = name;
        this.carrinho = [];
    };

    

    addProduct(produto) {
        this.produtos.push(produto);
    };

    setProductPrice(ProductId, price) {
        const produto = this.produtos.find(p => p.id === ProductId);
        if (produto) {
            produto.price = price;
            return produto;
        } else {
            return null;
        }
    };

    getAllProducts() {
        return this.produtos
    }

    //falta um metodo aqui!!!!

    getALlProductsNames() {
        return this.produtos.map(p => p.name)
    }

    getProductById(id) {
        return this.produtos.find(p => id === p.id ? p : null)
    }

    getProductByName(name) {
        return this.produtos.find(p => name === p.name ? p : null)

    }

    getProductsByPrice(initialPrice, finalPrice) {
        return this.produtos.filter(p => p.price >= initialPrice && p.price <= finalPrice)
    }

    addProductToCart(produto) {

        return this.produtos.filter(p => {
            if (produto === p.id) {
                this.carrinho.push(p)
            }
            if (produto === p.name) {
                this.carrinho.push(p)
            }
        })
    }

    getCart() {
        return this.carrinho
    }

    getCartTotalPrice() {
        return this.carrinho.reduce((a, b) => a.price + b.price)
    }

}

const produtosDeRoupa = [
    { id: 1, name: 'calças', price: 50 },
    { id: 2, name: 'camisa', price: 30 },
    { id: 3, name: 'casaco', price: 100 },
    { id: 4, name: 'calção', price: 25 },
    { id: 5, name: 'saia', price: 40 }]

const ecommerce = new Ecommerce()

produtosDeRoupa.forEach(produto => ecommerce.addProduct(produto));

ecommerce.setProductPrice(1, 199)

const produtos = ecommerce.getAllProducts()
//console.log(produtos)

const nomeProdutos = ecommerce.getALlProductsNames()
//console.log(nomeProdutos)

const produtoId = ecommerce.getProductById(5)
//console.log(produtoId)

const produtoNome = ecommerce.getProductByName('jaqueta');
//console.log(produtoNome)

const priceRange = ecommerce.getProductsByPrice(10, 50)
//console.log(priceRange)

const novoProduto = ecommerce.addProductToCart('camisa');
const novoProduto2 = ecommerce.addProductToCart('calças');

const carrinho = ecommerce.getCart();
//console.log(carrinho)


const precoTotal = ecommerce.getCartTotalPrice();
console.log(precoTotal)
