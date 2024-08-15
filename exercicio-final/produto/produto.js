function fetchProduct(id) {
  return fetch('https://fakestoreapi.com/products/' + id)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          return data;
      })
      .catch(function(error) {
          console.log('Erro:', error);
      });
}

function displayProduct(product) {
  var container = document.querySelector('.product-container');
  container.innerHTML = `
      <div class="product-image"><img src="${product.image}" alt="${product.title}"></div>
      <div class="product-info">
          <p>ID do Produto: ${product.id}</p>
          <h3>${product.title}</h3>
          <p>Categoria: ${product.category}</p>
          <p>Preço: $${product.price}</p>
          <p>${product.description}</p>
      </div>
  `;
}

function displayRelatedProducts(products) {
  var relatedContainer = document.querySelector('.related-products');
  relatedContainer.innerHTML = '';

  for (var i = 0; i < 3; i++) {
      var product = products[i];
      var productCard = `
          <div class="related-product-card">
              <div><img src="${product.image}" alt="${product.title}" style="width: 100px;"></div>
              <div>
                  <h4>${product.title}</h4>
                  <p>$${product.price}</p>
              </div>
          </div>
      `;
      relatedContainer.innerHTML += productCard;
  }
}

function loadProduct() {
  var params = new URLSearchParams(window.location.search);
  var productId = params.get('id');
  if (!productId) {
      productId = 1; 
  }

  fetchProduct(productId).then(function(product) {
      displayProduct(product);

      fetch('https://fakestoreapi.com/products/category/' + product.category)
          .then(function(response) {
              return response.json();
          })
          .then(function(relatedProducts) {
              displayRelatedProducts(relatedProducts);
          });
  });
}

function setFooterYear() {
  var footer = document.querySelector('.copywrite');
  var year = new Date().getFullYear();
  footer.textContent = 'Copyright ' + year;
}

loadProduct();
setFooterYear();