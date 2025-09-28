// Cierra el menú hamburguesa en responsive
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      new bootstrap.Collapse(navbar).toggle();
    }
  });
});

// Carrito básico
let cartCount = 0;
const cartBadge = document.getElementById('cart-count');

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartBadge.textContent = cartCount;
  });
});
