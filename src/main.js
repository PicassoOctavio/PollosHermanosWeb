import "./main.scss";
import menu from "./menu.json";
import "./assets/fonts/Marcheile-Bold-Condensed.woff";
import "./assets/fonts/Marcheile-Bold-Condensed.woff2";
/* DO NOT EDIT ABOVE THIS LINE. You can start editing here. */

/**
 * === CODE HINT ===
 * You can write your own js code here, also you can import other files.
 * If you want to split your code into multiple files, then import them here this way:
 * import ./path/to/your/file.js
 *
 */

document.addEventListener("DOMContentLoaded", () => {
  const hamburguer = document.querySelector(".hamburguer");
  hamburguer.onclick = () => {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  };

  // Swipper slider
  const swiper = new Swiper(".card-wrapper", {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  /* Menu slider */
  const menuListElement = document.getElementById("menuList");

  menu.menuList.forEach((item) => {
    const li = document.createElement("li");
    li.className = "card-item swiper-slide";
    li.innerHTML = `
          <a href="#" class="card-link">
              <img src="./src/assets/images/gastro/${
                item.menuImageName
              }" alt="${item.menuName}" class="card-image" />
              <p class="badge ${item.menuType.toLowerCase()}">${
      item.menuType
    }</p>
              <h2 class="card-title">${item.menuName}</h2>
              <p class="card-description">${item.menuDescription}</p>
              <button class="card-button material-symbols-outlined">add</button>
          </a>
      `;
    menuListElement.appendChild(li);
  });

  /* scroll to on nav-button click */
  document.getElementById("infoButton").addEventListener("click", () => {
    scrollTo(".hero");
  });

  document.getElementById("menuButton").addEventListener("click", () => {
    scrollTo(".menu-section");
  });

  document.getElementById("locationButton").addEventListener("click", () => {
    scrollTo(".location-section");
  });

  const scrollTo = (sectionClass) => {
    const section = document.querySelector(sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      const navBar = document.querySelector(".nav-bar");
      navBar.classList.toggle("active");
    }
  };

  /* setColor on nav-button active */
  const navButtons = document.querySelectorAll(".nav-button");

  const handleNavButtonClick = (event) => {
    navButtons.forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
  };
  navButtons.forEach((button) => {
    button.addEventListener("click", handleNavButtonClick);
  });
});
