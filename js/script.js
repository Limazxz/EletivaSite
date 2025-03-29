document.addEventListener("DOMContentLoaded", () => {
  const inicioButton = document.querySelector('a[href="#home"]');
  const sobreButton = document.querySelector('a[href="#sobre"]');
  const contatoButton = document.querySelector('a[href="#contato"]');
  const container = document.querySelector(".container");

  if (inicioButton) {
    inicioButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "index.html#home";
    });
  }

  if (sobreButton) {
    sobreButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "sobre.html";
    });
  }

//   if (contatoButton) {
//     contatoButton.addEventListener("click", (event) => {
//       event.preventDefault();
//       window.location.href = "contato.html";
//     });
//   }

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

  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navDropdown = document.querySelector(".nav-dropdown");

  if (hamburgerMenu) {
    hamburgerMenu.addEventListener("click", () => {
      navDropdown.style.display =
        navDropdown.style.display === "block" ? "none" : "block";
    });
  }
  if (contatoButton) {
    contatoButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "contato.html";
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
