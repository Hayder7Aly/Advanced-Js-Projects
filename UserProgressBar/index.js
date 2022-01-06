const testimonialsContainer = document.querySelector('.testimonial-container')
const userImage = document.querySelector('.user-image') 
const userName = document.querySelector('.userName')
const role = document.querySelector('.role')

const testimonials = [
    {
        name : 'Hayder Aly',
        position : 'Python Developer',
        photo : 'img/user1.jpg'
    },
    {
        name : 'Aly Raza',
        position : "ReactJs Developer",
        photo : 'img/user2.jpg'
    },

    {
        name : 'John Doe',
        position : 'JavaScript Developer',
        photo : 'img/user3.jpg'
    }
]

let idx = 1;
function updateTestimonials (){
    const { name,position,photo } =  testimonials[idx];
    userImage.src = photo;
    userName.innerHTML = name;
    role.innerHTML = position;
    idx++;
    
    if(idx > testimonials.length - 1){
        idx = 0;
    }
}
setInterval(updateTestimonials , 5000);