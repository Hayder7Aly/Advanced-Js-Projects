AOS.init({
  offset: 125,
  duration: 600,
});

const main = document.querySelector(".main");

function createRandomColor() {
  let colorCode = "";
  for (let i = 1; i <= 6; i++) {
    const components = [
      "a",
      "1",
      "b",
      "3",
      "2",
      "c",
      "8",
      "9",
      "d",
      "4",
      "e",
      "5",
      "f",
      "6",
      "7",
    ];
    colorCode += components[Math.floor(Math.random() * components.length)];
  }
  return colorCode;
}

function createRandomRating() {
  return (Math.random() * 8 + 1).toFixed(1);
}

function createRandomView() {
  const view = [
    "Awesome Color For You 💯 ",
    "Waooo! Beautiful 🥰",
    "Hurry! 🤭 Nice Color ",
    "Fresh Color Use 🤒",
    "You Are Lucky ✅",
    "whooo 🚀",
    "nice 🔥",
    "good luck 🙉",
  ];
  return view[Math.floor(Math.random() * view.length)];
}

function createCards() {
  for (let i = 0; i <= 100; i++) {
    const color = createRandomColor();
    const rating = createRandomRating();
    const overview = createRandomView();

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-aos", "flip-left");
    card.innerHTML = `
    <div class="color" style="background-color: #${color};"></div>
        <div class="colorInfo">
          <p class="colorCode">#${color}</p>
          <p class="rating ${getClass(rating)}">${rating}⭐</p>
        </div>

        <div class="animate">
          <button class="copied">Color Code</button>
          <p class="overview">${overview} 💗</p>
        </div>

        `;
    main.appendChild(card);
  }
}

createCards();

function getClass(rating) {
  if (rating <= 4) {
    return "red";
  } else if (rating <= 7) {
    return "orange";
  } else {
    return "green";
  }
}

const buttons = document.querySelectorAll(".copied");
const colorCode = document.querySelectorAll(".colorCode");

// Clipboard

buttons.forEach((btn, idx) => {
  btn.addEventListener("click", (e) => {
    const overview =  document.querySelectorAll(".overview");
    overview[idx].style.display = "block";
    overview[idx].classList.add('showUp')

    setTimeout(() => {
      document.querySelectorAll('.overview')[idx].style.display = 'none';
      document.querySelectorAll('.overview')[idx].classList.remove('showUp');
    }, 2500);
    btn.innerText = "Copy Color 👍";
    setTimeout(() => {
      btn.innerText = 'Copy Color'
    }, 2500);
    const textarea = document.createElement("textarea");
    const color = colorCode[idx].innerText;
    textarea.value = `background-color : ${color};`;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  });
});


const topBtn = document.getElementById("myBtn");



topBtn.addEventListener("click", (e) => {
  scrollToTop();
});

window.addEventListener("scroll", () => {
  topBtn.classList.toggle("active", window.scrollY > 100);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
