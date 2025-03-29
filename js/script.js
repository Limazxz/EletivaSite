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
    // Enable scrolling with the mouse wheel
    carousel.addEventListener("wheel", (event) => {
      event.preventDefault();
      carousel.scrollBy({
        left: event.deltaY > 0 ? 300 : -300,
        behavior: "smooth",
      });
    });

    // Enable scrolling with keyboard arrow keys
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        carousel.scrollBy({ left: 300, behavior: "smooth" });
      } else if (event.key === "ArrowLeft") {
        carousel.scrollBy({ left: -300, behavior: "smooth" });
      }
    });
  });

  const allImages = document.querySelectorAll("img"); // Select all images on the site
  const overlay = document.createElement("div");

  overlay.classList.add("modal-overlay");
  document.body.appendChild(overlay);

  function expandImage(img) {
    img.classList.add("expanded");
    overlay.classList.add("active");

    overlay.addEventListener("click", () => {
      img.classList.remove("expanded");
      overlay.classList.remove("active");
    });

    img.addEventListener("click", () => {
      img.classList.remove("expanded");
      overlay.classList.remove("active");
    });
  }

  allImages.forEach((img) => {
    img.addEventListener("click", () => expandImage(img));
  });
});
