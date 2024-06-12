let btn = document.querySelector("#ekleBtn");
let todoForm = document.querySelector(".todoForm");
let liste = document.querySelector(".liste");
let todoTxt = document.querySelector("#todoTxt");
let deleteBtn = document.querySelector("#silBtn");
let activeTodoCount = document.querySelector('.activeTodoCount');
let activeTodoCounter = 0;
let listeler = [];

if (typeof localStorage.listeler !== 'undefined') {
    listeler = JSON.parse(localStorage.listeler);
    renderListe();
}

function handleFormSubmit(e) {
    e.preventDefault();
    let formData = new FormData(todoForm);
    let formObj = Object.fromEntries(formData);
    listeler.push(formObj);
    todoForm.reset();
    save();
    renderListe();
    activeTodoCounter++;
    activeTodoCount.innerText = activeTodoCounter;
}
todoForm.addEventListener('submit', handleFormSubmit);

function renderListe() {
    liste.innerHTML = '';
    for (let i = 0; i < listeler.length; i++) {
        liste.innerHTML += `<li><span>${listeler[i].todo}</span>
<button><img src="/10-14haz/todoApp/assets/img/tick.svg" alt=""></img></button>
<button><img class="trash" src="/10-14haz/todoApp/assets/img/trash.svg" alt=""></img></button></li>`;
    }
}

function save() {
    localStorage.listeler = JSON.stringify(listeler);
}


function deleteTodo() {
    localStorage.clear();
    listeler = [];
    renderListe ();
}

deleteBtn.addEventListener("click", deleteTodo);

