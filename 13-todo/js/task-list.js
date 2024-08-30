export default class TaskList {
    constructor(listId) {
        this.taskListElement = document.getElementById(listId);

        this.loadTasksFromLS();
    }

    addTaskToList({title, description, date, priority}) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');

        taskItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Due: ${date}</p>
        <p>Priority: ${priority}</p>
        <input class="checkbox" type="checkbox">
        <p class="remove">remove</p>
        `;

        taskItem.querySelector('.checkbox').addEventListener('change', (e) => {
            if (e.target.checked) {
                this.removeTaskFromDOM(taskItem);
            }
        });

        taskItem.querySelector('.remove').addEventListener('click', () => {
            this.removeTask(taskItem, { title, description, date, priority });
        });

        this.taskListElement.append(taskItem);
    }

    saveTaskToLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    loadTasksFromLS() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            this.addTaskToList(task);
        });
    }

    removeTaskFromDOM(taskItem) {
        taskItem.remove();
    }

    removeTaskFromLocalStorage(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(t => 
            t.title !== task.title || 
            t.description !== task.description || 
            t.date !== task.date || 
            t.priority !== task.priority
        );
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    removeTask(taskItem, task) {
        this.removeTaskFromDOM(taskItem);
        this.removeTaskFromLocalStorage(task);
    }

    addTask(task) {
        this.addTaskToList(task);
        this.saveTaskToLocalStorage(task);
    }
}