const container = document.querySelector('.container')
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

const anchors = document.querySelectorAll('.navigation a')

const logo = document.querySelector('header p')

logo.addEventListener('click' , () => window.location.reload())


// main logic  

function generateEmojieFaces(){
    for(let i = 1 ; i<=40; i++){
        let naming = i;
        if(i <= 9){
            naming = '0'+i;
        }
        const box = document.createElement('box')
        box.classList.add('box')
        box.innerHTML = `
        <span class="emojie">&#x1f6${naming}</span>
        `
        container.appendChild(box)
    }

    for(let i = 11 ; i<=35; i++){
        const box = document.createElement('box')
        box.classList.add('box')
        box.innerHTML = `
        <span class="emojie">&#x1F9${i}</span>
        `
        container.appendChild(box)
    }
}

function generateEmojiAnimals(){
    for(let i = 1 ; i<=40; i++){
        let naming = i;
        if(i <= 9){
            naming = '0'+i;
        }
        const box = document.createElement('box')
        box.classList.add('box')
        box.innerHTML = `
        <span class="emojie">&#x1f4${naming}</span>
        `
        container.appendChild(box)
    }
}

function generateEmojieChar(){
    for(let i = 1 ; i<=40; i++){
        let naming = i;
        if(i <= 9){
            naming = '0'+i;
        }
        const box = document.createElement('box')
        box.classList.add('box')
        box.innerHTML = `
        <span class="emojie">&#x1f3${naming}</span>
        `
        container.appendChild(box)
    }
}


// filter by user choice 


function emojieGenerator(e){
    container.innerHTML = '';
    const anchorText = e.target.innerText;
    console.log(anchorText)
    switch (anchorText) {
        case 'Characters':
            generateEmojieFaces()            
            break;
        case "Animals":
            generateEmojiAnimals()
        case "Nature":
            generateEmojieChar()
        default:
            generateEmojiAnimals()
            generateEmojieChar()
    }
    
}



anchors.forEach(anchor =>{
    anchor.addEventListener('click' , (e)=>{
        emojieGenerator(e)
    })
})


// responsive ness design purpose 

toggle.addEventListener('click'  , togglerFunction)

function togglerFunction(){
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
}


