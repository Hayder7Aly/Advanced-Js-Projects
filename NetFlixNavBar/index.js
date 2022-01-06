const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const nav = document.querySelectorAll(".nav");

// console.log(nav[0]);

openBtn.addEventListener("click", () => {
  nav.forEach((navEl) => navEl.classList.add("visible"));
});

closeBtn.addEventListener("click", () => {
  nav.forEach((navEl) => navEl.classList.remove("visible"));
});
