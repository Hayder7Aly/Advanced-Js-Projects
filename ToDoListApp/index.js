const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem("todos"))

if(todos){
    todos.forEach(todo => addToDo(todo))
}


form.addEventListener('submit' , (e) => {
    e.preventDefault();
    addToDo()
})

function addToDo(todo){
    let todoText = input.value;
    
    if(todo){
        todoText = todo.text;
    }

    // console.log(todoText)

    if (todoText && todoText.trim() !== ''){
        const todoEl = document.createElement('li')
        if(todo && todo.completed == true){
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener('click' , (e)=>{
            todoEl.classList.toggle('completed')
            updateLS()
        })

        todoEl.addEventListener('contextmenu' , (e)=>{
            e.preventDefault()
            todoEl.remove()
            updateLS()
        })


        todosUL.appendChild(todoEl)

        input.value = '';

        updateLS();
    }
}

function updateLS(){
    
    todosEl = document.querySelectorAll('li');
    const todos= []
    todosEl.forEach(todo =>{
        todos.push({
            text : todo.innerText,
            completed : todo.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos))

}




