document.addEventListener("DOMContentLoaded", () => {
  const inicioButton = document.querySelector('a[href="#home"]');
  const sobreButton = document.querySelector('a[href="#sobre"]');
  const contatoButton = document.querySelector('a[href="#contato"]');

  if (inicioButton) {
    inicioButton.addEventListener("click", (event) => {
      event.preventDefault();
      location.reload("Inicio"); // Refreshes the page only for "Início"
    });
  }

  if (sobreButton) {
    sobreButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "sobre.html";
    });
  }

  if (contatoButton) {
    contatoButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "contato.html";
    });
  }

  const images = document.querySelectorAll(".container img");
  const modal = document.createElement("div");
  const overlay = document.createElement("div");
  let currentIndex = 0;

  modal.classList.add("image-modal");
  overlay.classList.add("modal-overlay");

  modal.innerHTML = `
    <button class="close-btn">Fechar</button>
    <img src="" alt="Imagem ampliada" />
  `;

  document.body.appendChild(modal);
  document.body.appendChild(overlay);

  const modalImage = modal.querySelector("img");
  const closeButton = modal.querySelector(".close-btn");

  function openModal(index) {
    currentIndex = index;
    modalImage.src = images[currentIndex].src;
    modal.style.display = "block";
    overlay.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
  }

  images.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });

  closeButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  images.forEach((img) => {
    img.addEventListener("click", () => {
      // Remove 'enlarged' class from all images
      images.forEach((image) => image.classList.remove("enlarged"));
      // Add 'enlarged' class to the clicked image
      img.classList.add("enlarged");
    });
  });
});
