const menuBtn = document.getElementById("toggle");
const ctaBtn = document.getElementById("open");
const close = document.getElementById("close");
const main = document.querySelector(".container");
const body = document.querySelector("body");
const modal = document.getElementById("modal");
// const modalForm = document.getElementById("modal");

// menu toggle
menuBtn.addEventListener("click", () => {
  body.classList.toggle("show-nav");
});
// remove menu by click on container
main.addEventListener("click", () => {
  body.classList.remove("show-nav");
});

// show cta form
ctaBtn.addEventListener("click", () => {
  modal.classList.add("show-modal");
});
// close cta form
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});

// close cta form
window.addEventListener("click", (e) => {
  e.target === modal ? modal.classList.remove("show-modal") : false;
});
