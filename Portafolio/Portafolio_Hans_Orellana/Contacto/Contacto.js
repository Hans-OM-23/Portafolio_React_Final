// ----- MENÚ RESPONSIVE -----
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // ----- ANIMACIONES FADE-IN -----
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add("fade-in");
  });

  // ----- FORMULARIO DE CONTACTO -----
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Obtener datos (solo como demo)
      const nombre = form.querySelector("input[type='text']").value;
      const email = form.querySelector("input[type='email']").value;
      const mensaje = form.querySelector("textarea").value;

      alert(`¡Gracias ${nombre}! Hemos recibido tu mensaje:\n\n"${mensaje}"\n\nTe contactaremos al correo: ${email}`);

      form.reset();
    });
  }
});
