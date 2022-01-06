AOS.init({
    offset: 140,
    duration: 600,
});
  
loading()
function loading(){
  document.getElementById('container').style.display = 'none';
  setTimeout(() => {
    document.getElementById('load').style.display = 'none';
    document.getElementById('container').style.display = 'block';
  }, 3000);
}


const colorName = ['Warm Flame','Night Fade','Spring Warmth','Juicy Peach','Young Passion','Lady Lips','Sunny Morning','Rainy Ashville','Frozend Dreams','Winter Neva','Dusty Grass','Tempting Azure','Heavy Rain','Amy Crisp','Mean Fruit','Deep Blue','Ripe Malinka','Cloudy Knoxville','Malibu Beach','New Life','True Sunset','Morpheus Den','Rare Wind','Near Moon',"Wild Apple",'Saint Petersburg','Arielles Smile','Plum Plate','Everlasting Sky','Happy Fisher','Blessing',"Sharpeye Eagle",'Ladoga Bottom','Lemon Gate','Itmeo Branding','Zeus Miracle','Old Hat','Star Wine','Deep Blue','Coup De Grace','Happy Acid','Awesome Pine','New York','Loon Crest','Mixed Hopes','Fly Hight','Strong Blis','Fresh Milk','Snow Again','February Ink','Kind Steel','Soft Grass']

function createRandomDegree(){
    return Math.floor(Math.random()* 120) + 30;
}

function getRandomColor(){
    const colorComponents = '1a2b3c4d5f6e87f9'
    let color = '#'
    for(let i = 1;i<=6;i++){
        color += colorComponents[Math.floor(Math.random() * colorComponents.length)]
    }
    return color
}





function createLinearGradient(){    
    for(let i = 1;i<=50;i++){
        const firstColor = getRandomColor()
        const secondColor = getRandomColor()
        const degree = createRandomDegree()
        // console.log(firstColor , secondColor, createRandomDegree())
        const box = document.createElement('div')
        box.classList.add('box')
        box.setAttribute("data-aos", "flip-left");
        box.innerHTML = `

        <div class="aboutColor">
        <p id="colorId">000${i} <span> ${colorName[i]}</span></p>
        <button class="aboutBtn copied"> <i class="fa fa-arrow-down"></i> </button>
        </div>

        <div class="colorContent">
        <div class="roundedbox" id = 'color'  style= "background: linear-gradient(${degree}deg,${secondColor} 0%, ${firstColor} 100%)"></div>
        </div>

        <div class="colorInfo">
            <p class="colorCode">${secondColor} <span> ↔️ </span> ${firstColor}</p>
            <button class="copy copied">Copy Css</button>
        </div>
        <p class='block'>background: linear-gradient(${degree}deg,${secondColor} 0%, ${firstColor} 100%);</p>
        
        `
        document.getElementById('main').appendChild(box)
     

    }
}

createLinearGradient()

const colorGoal = document.querySelectorAll('.roundedbox');

colorGoal.forEach(goal =>{
  goal.addEventListener('click',()=>{
    removeClasses()
    goal.classList.add('active')
  })
})

function removeClasses(){
  colorGoal.forEach(goal =>{
    goal.classList.remove('active')
  })
}



const buttons = document.querySelectorAll('.copy')
const colorCode = document.querySelectorAll('.block')
const colorContent = document.querySelectorAll('.colorContent')
const notify = document.querySelector('.notify')

notify.addEventListener('click',(e)=>{
  notify.classList.remove('active')
})

buttons.forEach((btn, idx) => {
    btn.addEventListener("click", (e) => {
      const textarea = document.createElement("textarea");
      const color = colorCode[idx].innerText;
      textarea.value = color;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      notify.classList.add('active')
      setTimeout(() => {
        notify.classList.remove('active')
      }, 2500);
      animateMessage(idx)
    });
  });




function getRandomEmoji(){
  const emoji = ['🚀 Awesome ', 'Hurry 💯💯','Wahoo 🐎 ','Fire 🔥🔥 ','Good 👍👍 ','Excellent 🦅','Pretty 🦁 ','Thanks 👦','Trend 👏','Great 💝','Easy 🐼','Effective🐪','Popular 👼']
  return emoji[Math.floor(Math.random() * emoji.length)]
}

function animateMessage(idx){
  const box = colorContent[idx].firstElementChild;
  const boxStyle = box.style.background;
  box.style.background = '#f6f6f6'
  box.innerText = `Css Copied ${getRandomEmoji()}`
  setTimeout(() => {
    box.style.background = '';
    box.innerText = '';
  } ,2000);

  setTimeout(() => {
    box.style.background = `${boxStyle}`;
  },2002);
}
//   top btn
const topBtn = document.getElementById("topBtn");
topBtn.addEventListener("click", (e) => {
  scrollToTop();
});

window.addEventListener("scroll", () => {
  topBtn.classList.toggle("active", window.scrollY > 200);
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}