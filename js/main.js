let filters = document.querySelectorAll(".our-works ul li"),
  imgFilters = document.querySelectorAll(".img");

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
    if (el.dataset.img === img.dataset.img) {
      el.style.display = "flex";
    } else {
      el.style.display = "none";
    }
    if (img.dataset.img === "all") {
      el.style.display = "block";
    }
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

    document.body.classList.add("stop-scrolling");
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
