const ratings = document.querySelectorAll('.rating')
const ratingsCont = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied';

ratingsCont.addEventListener('click',(e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
       e.target.parentNode.classList.add('active')
       selectedRating = e.target.nextElementSibling.innerHTML;


    }
})

sendBtn.addEventListener('click',(e)=>{
    panel.innerHTML = `
    <i class="fas fa-heart"><i>
    <strong class='thanks'>Thank You !</strong>
    <br>
    <strong class = 'feed'>FeedBack : ${selectedRating}</strong>
    <p '>We 'll use your feedback to improve our customer support.</p>
  `

})

function removeActive(){
    for(let i = 0 ; i<ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}