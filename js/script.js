let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCartCount();
  alert(`${item} added to cart!`);
}

function updateCartCount() {
  document.getElementById('cart-count').textContent = cart.length;
}

function loadCartItems() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    cartItems.appendChild(div);
  });
}

// Load cart items on cart page
if (window.location.pathname.includes('cart.html')) {
  loadCartItems();
}
// Dark Mode Toggle
const darkModeToggle = document.createElement('div');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = `
  <span>Dark Mode</span>
  <input type="checkbox" id="dark-mode-switch">
`;
document.querySelector('nav').appendChild(darkModeToggle);

const darkModeSwitch = document.getElementById('dark-mode-switch');
darkModeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});