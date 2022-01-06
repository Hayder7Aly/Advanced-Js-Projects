AOS.init({
    offset: 125,
    duration: 600,
  });
  

const all = document.querySelector(".allbtn");
const framework = document.querySelector(".frameworkbtn");
const languages = document.querySelector(".languagesbtn");
const plateform = document.querySelector(".plateformbtn");

const boxes = document.querySelectorAll("section .content .box");

// console.log(boxes)

function filteration(e) {
  if (e.target.classList.contains("languagesbtn")) {
    boxes.forEach((box) => {
      if (box.classList.contains("language")) {
        box.style.display = "flex";
      } else {
        box.style.display = "none";
      }
    });
  } else if (e.target.classList.contains("frameworkbtn")) {
    boxes.forEach((box) => {
      if (box.classList.contains("framework")) {
        box.style.display = "flex";
      } else {
        box.style.display = "none";
      }
    });
  } else if (e.target.classList.contains("plateformbtn")) {
    boxes.forEach((box) => {
      if (box.classList.contains("plateform")) {
        box.style.display = "flex";
      } else {
        box.style.display = "none";
      }
    });
  } else {
    boxes.forEach((box) => {
      box.style.display = "flex";
    });
  }
}

function removeClasses() {
  const buttons = document.querySelectorAll("section .components button");
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
}


all.addEventListener("click", (e) => {
  removeClasses();
  e.target.classList.add("active");
  filteration(e);
});
framework.addEventListener("click", (e) => {
  removeClasses();
  e.target.classList.add("active");
  filteration(e);
});
languages.addEventListener("click", (e) => {
  removeClasses();
  e.target.classList.add("active");
  filteration(e);
});

plateform.addEventListener("click", (e) => {
  removeClasses();
  e.target.classList.add("active");
  filteration(e);
});
