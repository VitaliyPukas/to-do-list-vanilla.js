const form = document.querySelector('#form');
const taskTitle = document.querySelector('#create_title');
const taskDescription = document.querySelector('#create_description');
const taskLists = document.querySelector('#todo_list');

let tasks = [
    {
        id: 24242424,
        title: "Test",
        description: "test desc",
        done: false,
    }
];
// отримати з локал
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => renderTask(task));
}

class Parent {
    constructor() {

        this.addTask();
        this.renderTask();
    }

    addTask(e) {
        // Відміна відправки форми
        // e.preventDefault();

        // Дістаєм інформацію з полів 
        const titleInput = taskTitle.value;
        const descriptionInput = taskDescription.value;

        const newTask = {
            id: Date.now(),
            title: titleInput,
            description: descriptionInput,
            done: false,
        };

        tasks.push(newTask);
        console.log("tasks", tasks)

        // saveToLocalStorage();

        renderTask(newTask);

        // Очищаємо поле вводу
        taskTitle.value = '';
        taskDescription.value = '';
        taskTitle.focus();
    }

    // deleteTask(e) {
    //     if (e.target.dataset.action === 'delete') {
    //         const parentItem = e.target.closest('li');
    //         const id = Number(parentItem.id);
    //         tasks = tasks.filter((task) => task.id !== id);
    //         saveToLocalStorage();
    //         parentItem.remove();
    //     }

    // }

    // editTask(e) {
    //     const parentItem = e.target.closest('li');
    //     const taskTitle = parentItem.querySelector('.list_title');
    //     const saveEdit = parentItem.querySelector('.save-edit');
    //     const edit = parentItem.querySelector('.edit');
    //     const taskDescription = parentItem.querySelector('.todo_list_bottom');
    //     const carentlyItem = tasks.find(task => task.id === +parentItem.id);


    //     if (e.target.dataset.action === "edit") {
    //         carentlyItem.title = taskTitle.value;
    //         taskTitle.removeAttribute("readonly");
    //         taskTitle.focus();
    //         carentlyItem.description = taskDescription.value;
    //         taskDescription.removeAttribute("readonly");
    //         edit.classList.add('none');
    //         saveEdit.classList.remove('none');
    //     }
    //     if (e.target.dataset.action === "save-edit") {
    //         taskTitle.setAttribute("readonly", true);
    //         taskDescription.setAttribute("readonly", true);
    //         edit.classList.remove('none');
    //         saveEdit.classList.add('none');

    //         saveToLocalStorage();
    //     }

    // }

    // checkTask(e) {
    //     if (e.target.dataset.action === "done") {
    //         const parentItem = e.target.closest('li');
    //         const checkItem = parentItem.querySelector('.check-item');
    //         const checkTitle = parentItem.querySelector('.list_title');
    //         const checkDescription = parentItem.querySelector('.todo_list_bottom');
    //         checkItem.classList.toggle('done');

    //         if (checkItem.classList.contains('done')) {
    //             checkItem.classList.add('bi-check-circle');
    //             checkItem.classList.remove('bi-circle');
    //             checkTitle.classList.add('crossed');
    //             checkDescription.classList.add('crossed');
    //         } else {
    //             checkItem.classList.remove('bi-check-circle');
    //             checkItem.classList.add('bi-circle');
    //             checkTitle.classList.remove('crossed');
    //             checkDescription.classList.remove('crossed');
    //         }
    //     }
    // }

    // saveToLocalStorage() {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // }

    renderTask(task) {
        const taskHTML = `
        //логіка для ітерування лішок
        <li id="${task.id}" class="list_item">
            <div class="todo_list_top">
                <div class="list_top_left">
                    <i class="bi bi-circle check-item" data-action="done"></i>
                    <input class="list_title" value="${task.title}" readonly></input>
                </div>
                <div class="list_top_right">
                    <button class="icon-edit-3 edit" data-action="edit"></button>
                    <button class="save-edit bi bi-save edit-none none" data-action="save-edit"></button>
                    <button class="icon-trash-2-1" data-action="delete"></button>
                </div>
            </div>
            <input class="todo_list_bottom" value="${task.description}" readonly></input>
        </li>
        `

        // Додаємо задачу в список
        taskLists.insertAdjacentHTML('beforeend', taskHTML);
    }
}

let nnn = new Parent();


// Додавання задач
form.addEventListener('submit', nnn.addTask(e));

// // Видалення задач
// taskLists.addEventListener('click', deleteTask);

// // Задачу виконано
// taskLists.addEventListener('click', checkTask);

// // Редагування задачі
// taskLists.addEventListener('click', editTask);



