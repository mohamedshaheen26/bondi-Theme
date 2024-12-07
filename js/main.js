// Select all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Change threshold as needed (e.g., 0.5 means the section should be at least 50% visible)
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const id = entry.target.id;
    const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

    if (entry.isIntersecting) {
      // Add active class to the nav link
      navLink.classList.add("active");
    } else {
      // Remove active class if section is not in view
      navLink.classList.remove("active");
    }
  });
}, options);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

// Filters Works
let filters = document.querySelectorAll(".our-works ul li"),
  imgFilters = document.querySelectorAll(".works .img");

filters.forEach((item) => {
  item.addEventListener("click", () => {
    filters.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");

    filter(item);
  });
});

function filter(img) {
  imgFilters.forEach((el) => {
    el.style.display = "none";
  });

  document.querySelectorAll(img.dataset.cat).forEach((element) => {
    element.style.display = "block";
  });
}

// Creare Popup With Image
let imgs = document.querySelectorAll(".box img");

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    let overlay = document.createElement("div");
    overlay.className = "overlay-popup";

    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";

    let imgSrc = document.createElement("img");
    imgSrc.src = img.src;

    popupBox.appendChild(imgSrc);

    let closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "X";

    popupBox.appendChild(closeBtn);

    overlay.appendChild(popupBox);

    document.body.appendChild(overlay);

    // document.body.classList.add("stop-scrolling");
  });
});

// Close Popup With button
document.addEventListener("click", (e) => {
  if (e.target.className === "close-btn") {
    document.querySelector(".overlay-popup").remove();
    document.body.classList.remove("stop-scrolling");
  }
});

// Close Popup When Clicking Outside
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("overlay-popup")) {
    document.querySelector(".overlay-popup").remove();
    document.body.classList.remove("stop-scrolling");
  }
});

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 100px from the top
window.onscroll = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.classList.add("appear__ScrollToTopBtn");
  } else {
    scrollToTopBtn.classList.remove("appear__ScrollToTopBtn");
  }
};

// Scroll to top when the button is clicked
scrollToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
