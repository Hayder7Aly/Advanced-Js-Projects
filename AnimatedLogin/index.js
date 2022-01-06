const labels = document.querySelectorAll('.formControl label');

labels.forEach(label => {
  label.innerHTML = label.innerText.split('').map((letter,idx)=>{
    return `<span style='transition-delay : ${idx * 50}ms'>${letter}</span>`
  }).join('')
});



function getData(){
  fetch("https://genius.p.rapidapi.com/songs/442856", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "genius.p.rapidapi.com",
      "x-rapidapi-key": "bfa7d79f8bmshd32c3e5476611b7p1dc46djsn61bbbd6a6b29"
    }
  })
  .then(response => {
    console.log(response.json());
  })
  .catch(err => {
    console.error(err);
  });
}

getData()