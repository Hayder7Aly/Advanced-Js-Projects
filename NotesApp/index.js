const addBtn = document.getElementById("add");
const delAllNotes = document.getElementById("delAll");

const Fnotes = JSON.parse(localStorage.getItem("notes"));

if (Fnotes) {
  Fnotes.forEach((note) => {
    addNewNote(note);
  });
}

delAllNotes.addEventListener("click", () => {
  const question = confirm("Do You Want To Deleted All Notes ?");
  if (question === true) {
    localStorage.clear();
    location.reload();
  }
});

addBtn.addEventListener("click", () => {
  addNewNote();
});

let search = document.getElementById("search");
let notes = document.querySelectorAll(".note");
search.addEventListener("input", (e) => {
  notes.forEach((note, idx) => {
    if (note.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  });
});

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `

    <div class="tools">
    <button class="edit">
        <i class="fas fa-edit" id = 'edit'></i>
    </button>
    <button class="delete">
        <i class="fas fa-trash-alt" id = 'del'></i>
    </button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class = ${text ? "hidden" : ""}></textarea>

    `;

  document.body.appendChild(note);

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  textarea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();
    UpdateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    UpdateLS();
  });
}

function UpdateLS() {
  const notesText = document.querySelectorAll("textarea");
  // console.log(notesText)
  const notes = [];
  notesText.forEach((note) => {
    if (note.value.trim() !== "") {
      notes.push(note.value);
    }
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
