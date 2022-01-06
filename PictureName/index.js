const input = document.getElementById('name')
const mainCont = document.querySelector('.main')

function main(name){
    mainCont.innerHTML = ''
    const div = document.createElement('div')
    div.classList.add('img')
    div.setAttribute('data-jdenticon-value','hayder')
    div.innerHTML = `
        <svg data-jdenticon-value = "hayder" ></svg>
    `

    mainCont.appendChild(div)


}

input.addEventListener('input' , (e)=> {
    main(input.value)
})