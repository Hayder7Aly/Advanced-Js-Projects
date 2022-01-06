const toggle = document.querySelector('.toggle')

const boxes = document.querySelectorAll('.box img')


toggle.addEventListener('click' , (e)=>{
    toggle.classList.toggle('active')
})

// movies

function addition(e){
    boxes.forEach(box =>{
        if(box != e.target)
        box.parentElement.classList.toggle('stay')
    })
}


boxes.forEach(box => {
    box.addEventListener('click', (e)=>{
    addition(e)
    box.parentElement.classList.toggle('active')
    })
})
