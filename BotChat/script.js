const main = document.querySelector(".main");
const textarea = document.querySelector(".textarea");
const sendBtn = document.querySelector(".send");
const popUp = document.querySelector('.popUp')
const register = document.querySelector('.register')


const userName = document.querySelector('.username')


var user;

userName.addEventListener('input' ,(e)=>{
 
 
    if(userName.value.trim().length > 3){
        register.disabled = false;
    
    }else{
        register.disabled = true;
    }
})

register.addEventListener('click' , (e)=>{
    popUp.remove()
    user = userName.value.trim()
})



const botReply = [
  "I could not under stand ?",
  "How are you man ?",
  "What would you say about Me ?",
  "What are you saying ...",
  "I am a AI Bot ...",
  "Are you know hayder aly .",
  "Whats up Man ..",
];

function botMessageReply() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML =`

    <div class="imgBx">
    <img src="img/bot2.png">
    </div>

    <div class="messageBox bot">
    <p class="message">${botReply[Math.floor(Math.random() * botReply.length)]}</p>
    <div class="info">
    <p class="name">AI Bot</p>
    <p class="time">${getDate()}</p>
    </div>
    </div>
    `

    main.appendChild(box)
}

function getDate() {
  let time = new Date().toLocaleTimeString();
  return time;
}

function createMessageBox(message) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
    <div class="imgBx">
    <h2>${user[0]}</h2>
    </div>

<div class="messageBox">
<p class="message">${message}</p>
<div class="info">
    <p class="name">${user}</p>
    <p class="time">${getDate()}</p>
</div>
</div>
    `;

  main.appendChild(box);

}

function sendMsg() {
  let message = textarea.value;
  textarea.value = ''
  if (message.trim() !== "") {
    createMessageBox(message);
    setTimeout(() => {
      botMessageReply();
    }, getSeconds() * 1000);
  } else {
    alert("Please Write Some Mesage");
  }
}

sendBtn.addEventListener("click", sendMsg);


function getSeconds(){
    let seconds = [3 , 2 ,1]
    return seconds[ Math.floor(Math.random() * seconds.length) ]
}