document.addEventListener("DOMContentLoaded", () => {
  const inicioButton = document.querySelector('a[href="index.html#home"]');
  const sobreButton = document.querySelector('a[href="sobre.html#sobre"]');
  const contatoButton = document.querySelector('a[href="contato.html"]');
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

  const carousels = document.querySelectorAll(".image-carousel");
  carousels.forEach((carousel) => {
    const prevButton = carousel.parentElement.querySelector(".prev-btn");
    const nextButton = carousel.parentElement.querySelector(".next-btn");

    prevButton.addEventListener("click", () => {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    });

    // Enable scrolling with the mouse wheel
    carousel.addEventListener("wheel", (event) => {
      event.preventDefault();
      carousel.scrollBy({
        left: event.deltaY > 0 ? 300 : -300,
        behavior: "smooth",
      });
    });
  });

  const images = document.querySelectorAll(".image-carousel img");
  const modal = document.createElement("div");
  const overlay = document.createElement("div");

  modal.classList.add("image-modal");
  overlay.classList.add("modal-overlay");

  document.body.appendChild(modal);
  document.body.appendChild(overlay);

  function openModal(src) {
    modal.innerHTML = `
      <button class="close-btn">Fechar</button>
      <img src="${src}" alt="Imagem ampliada" />
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

  images.forEach((img) => {
    img.addEventListener("click", () => openModal(img.src));
  });

  overlay.addEventListener("click", closeModal);
});
