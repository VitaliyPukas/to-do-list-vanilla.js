const form = document.querySelector('#form');
const taskTitle = document.querySelector('#create_title');
const taskDescription = document.querySelector('#create_description');
const taskLists = document.querySelector('#todo_list');

let tasks = [];

// Додавання задач
form.addEventListener('submit', addTask);

// Видалення задач
taskLists.addEventListener('click', deleteTask);

// Задачу виконано
taskLists.addEventListener('click', checkTask);

// Редагування задачі
taskLists.addEventListener('click', editTask);


// Функції
function addTask(e) {
    // Відміна відправки форми
    e.preventDefault();

    // Дістаєм інформацію з полів 
    const titleInput = taskTitle.value;
    const descriptionInput = taskDescription.value;

    const newTask = {
        id: Date.now(),
        title: titleInput,
        description: descriptionInput,
        done: false
    }

    tasks.push(newTask);


    const taskHTML = `
        <li id="${newTask.id}" class="list_item">
            <div class="todo_list_top">
                <div class="list_top_left">
                    <i class="icon-check-circle" data-action="done"></i>
                    <h4 class="list_title">${newTask.title}</h4>
                </div>
                <div class="list_top_right">
                    <button class="icon-edit-3" data-action="edit"></button>
                    <button class="icon-trash-2-1" data-action="delete"></button>
                </div>
            </div>
            <p class="todo_list_bottom">${newTask.description}</p>
        </li>`

    // Додаємо задачу в список
    taskLists.insertAdjacentHTML('beforeend', taskHTML);

    // Очищаємо поле вводу
    taskTitle.value = '';
    taskDescription.value = '';
    taskTitle.focus();
}

function deleteTask(e) {
    if (e.target.dataset.action === 'delete') {
        const parentItem = e.target.closest('li');
        const id = Number(parentItem.id);

        // tasks = tasks.filter(function (task) {
        //     if(task.id === id){
        //         return false
        //     } else {
        //         return true
        //     }
        // })
        parentItem.remove();
    }   
}

function editTask(e) {
    if (e.target.dataset.action === "edit"){
        const parentItem = e.target.closest('li');
        
    }
}

function checkTask(e) {
    if (e.target.dataset.action === "done") {
        const parentIte = e.target.closest('li');
        const checkItem = parentIte.querySelector('.icon-check-circle');
        const checkTitle = parentIte.querySelector('.list_title');
        checkTitle.classList.add('check_title');
        checkItem.classList.toggle('done');
    }
}