document.addEventListener("DOMContentLoaded", () => {
  const inicioButton = document.querySelector('a[href="index.html#home"]');
  const sobreButton = document.querySelector('a[href="sobre.html#sobre"]');
  const contatoButton = document.querySelector('a[href="contato.html"]');
  const container = document.querySelector(".container");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navDropdown = document.querySelector(".nav-dropdown");

  if (inicioButton) {
    inicioButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "index.html#home";
    });
  }

  if (sobreButton) {
    sobreButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "sobre.html#sobre";
    });
  }

  if (contatoButton) {
    contatoButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "contato.html#contato";
    });
  }

  const images = document.querySelectorAll(".container img");
  const modal = document.createElement("div");
  const overlay = document.createElement("div");
  let currentIndex = 0;

  modal.classList.add("image-modal");
  overlay.classList.add("modal-overlay");

  document.body.appendChild(modal);
  document.body.appendChild(overlay);

  function openModal(index) {
    currentIndex = index;
    modal.innerHTML = `
      <button class="close-btn">Fechar</button>
      <img src="${images[currentIndex].src}" alt="Imagem ampliada" />
    `;
    modal.style.display = "block";
    overlay.style.display = "block";

    const closeButton = modal.querySelector(".close-btn");
    closeButton.addEventListener("click", closeModal);
  }

  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", () => {
      navDropdown.style.display =
        navDropdown.style.display === "block" ? "none" : "block";
    });
  }

  const dropdownLinks = navDropdown.querySelectorAll("a");
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.getAttribute("href");
      window.location.href = href;
    });
  });
});
