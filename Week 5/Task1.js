document.addEventListener('DOMContentLoaded', () => {
  const products = [
      { name: 'Product 1', price: 10.00 },
      { name: 'Product 2', price: 20.00 },
      { name: 'Product 3', price: 30.00 },
  ];

  const cart = [];
  let cartTotal = 0;

  const productsContainer = document.getElementById('products-container');
  const cartContainer = document.getElementById('cart-container');
  const cartCount = document.getElementById('cart-count');
  const cartTotalElement = document.getElementById('cart-total');
  const cartSection = document.getElementById('cart-section');
  const toggleCartButton = document.getElementById('toggle-cart');
  const cartIcon = document.getElementById('cart-icon');

  function renderProducts() {
      productsContainer.innerHTML = '';
      products.forEach(product => {
          const productDiv = document.createElement('div');
          productDiv.className = 'product';
          productDiv.innerHTML = `
              <h3>${product.name}</h3>
              <p>Price: $${product.price.toFixed(2)}</p>
              <button class="add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
          `;
          productsContainer.appendChild(productDiv);
      });
  }

  function updateCart() {
      cartContainer.innerHTML = '';
      cartTotal = 0;

      cart.forEach(item => {
          const itemTotal = item.price * item.quantity;
          cartTotal += itemTotal;

          const itemDiv = document.createElement('div');
          itemDiv.className = 'cart-item';
          itemDiv.innerHTML = `
              <p>${item.name}</p>
              <p>Price: $${item.price.toFixed(2)}</p>
              <p>Quantity: 
                  <input type="number" class="cart-quantity" data-name="${item.name}" value="${item.quantity}" min="1">
              </p>
              <p>Total: $${itemTotal.toFixed(2)}</p>
              <button class="remove-from-cart" data-name="${item.name}">Remove</button>
          `;
          cartContainer.appendChild(itemDiv);
      });

      cartCount.textContent = cart.length;
      cartTotalElement.textContent = cartTotal.toFixed(2);
  }

  function addToCart(name, price) {
      const existingItem = cart.find(item => item.name === name);
      if (existingItem) {
          existingItem.quantity++;
      } else {
          cart.push({ name, price, quantity: 1 });
      }
      updateCart();
  }

  function removeFromCart(name) {
      const itemIndex = cart.findIndex(item => item.name === name);
      if (itemIndex > -1) {
          cart.splice(itemIndex, 1);
      }
      updateCart();
  }

  function updateQuantity(name, quantity) {
      const item = cart.find(item => item.name === name);
      if (item) {
          item.quantity = quantity;
      }
      updateCart();
  }

  productsContainer.addEventListener('click', event => {
      if (event.target.classList.contains('add-to-cart')) {
          const name = event.target.getAttribute('data-name');
          const price = parseFloat(event.target.getAttribute('data-price'));
          addToCart(name, price);
      }
  });

  cartContainer.addEventListener('click', event => {
      if (event.target.classList.contains('remove-from-cart')) {
          const name = event.target.getAttribute('data-name');
          removeFromCart(name);
      }
  });

  cartContainer.addEventListener('change', event => {
      if (event.target.classList.contains('cart-quantity')) {
          const name = event.target.getAttribute('data-name');
          const quantity = parseInt(event.target.value, 10);
          if (quantity > 0) {
              updateQuantity(name, quantity);
          }
      }
  });

  toggleCartButton.addEventListener('click', () => {
      cartSection.classList.toggle('hidden');
      toggleCartButton.textContent = cartSection.classList.contains('hidden') ? 'Show Cart' : 'Hide Cart';
  });

  cartIcon.addEventListener('click', event => {
      event.preventDefault();
      cartSection.classList.toggle('hidden');
      toggleCartButton.textContent = cartSection.classList.contains('hidden') ? 'Show Cart' : 'Hide Cart';
  });

  renderProducts();
  updateCart();
});
