//ADD
const input = document.querySelector("input");
const taskInput = document.querySelector(".task-input");
const todoList = document.querySelector(".to-do-list");
const addtolistBtn = document.querySelector(".addtolist-btn");

addtolistBtn.addEventListener("click", funcAdd);
input.addEventListener("keyup", function(e){
    if (e.key === "Enter") {
        funcAdd();
    };
});

function funcAdd(){
    //if(todoList.childElementCount < 5) {
        let newInput = document.createElement('div');
        newInput.classList.add('task');
        newInput.innerHTML = `<p contentEditable="true">${input.value}</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4" />
            <path d="M6 6L14 14" stroke="#C4C4C4" />
            <path d="M6 14L14 6" stroke="#C4C4C4" />
        </svg>`;
    //}
    todoList.appendChild(newInput);
    input.value = '';
};

/*
if (todoList.childElementCount == 5) {
    taskInput.style.display = 'none';
} else if (todoList.childElementCount < 5 && todoList.childElementCount > 0){
    taskInput.style.display = 'block';
} else if (todoList.childElementCount == 0) {
    taskInput.style.display = 'block';
    todoList.style.display = 'none';
};
*/



//DELETE
const deleteIcon = document.querySelectorAll(".task svg");
deleteIcon.forEach(el => {
    el.addEventListener("click", function(e) {
        this.parentElement.remove();
    })
});


//SORT
const downSort = document.querySelector(".sort-icon svg:first-child");
const upSort = document.querySelector(".sort-icon svg:last-child");

downSort.addEventListener("click",function() {
    this.classList.toggle("show");
    upSort.classList.toggle("show");
    const tasks = [...document.querySelectorAll(".task")];
    tasks.sort((a,b)=>{
        return parseInt(b.innerText) - parseInt(a.innerText);
    })
    todoList.replaceChildren(...todoList.children, ...tasks);
});

upSort.addEventListener("click",function() {
    this.classList.toggle("show");
    downSort.classList.toggle("show");
    const tasks = [...document.querySelectorAll(".task")];
    tasks.sort((a,b)=>{
        return parseInt(a.innerText) - parseInt(b.innerText);
    })
    todoList.replaceChildren(...todoList.children, ...tasks);
});