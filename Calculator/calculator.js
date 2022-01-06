VanillaTilt.init(document.querySelector(".container"), {
  max: 20,
  speed:300,
  glare: true,
  "max-glare": 0.2,
});

//It also supports NodeList
// VanillaTilt.init(document.querySelectorAll(".your-element"));

const clear = document.getElementById("clear");
const inputvalue = document.getElementById("value");
const nums = document.querySelectorAll(".num");
const equal = document.getElementById("equal");


clear.addEventListener("click", (e) => {
  inputvalue.value = "";
});

nums.forEach((value, index) => {
  value.addEventListener("click", () => {
    if (value.innerText !== "c" && value.innerText !== "=") {
        inputvalue.value += value.innerText;
    }
  });
});

equal.addEventListener("click", () => {
  const answer = eval(inputvalue.value);
  inputvalue.value = answer;
});
