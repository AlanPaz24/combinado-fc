// Combinado FC - JS base

document.addEventListener("DOMContentLoaded", () => {
  console.log("Combinado FC listo 🚀");

  // Ejemplo: botón de próximo partido
  const btn = document.querySelector(".btn-warning");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("El próximo partido es el sábado a las 18:00 🏟️");
    });
  }
});
