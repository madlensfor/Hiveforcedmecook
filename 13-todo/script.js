import Header from './js/header';
import Button from './js/button';
import Modal from './js/modal';
import TaskList from './js/task-list';

const container = document.querySelector('.container');

const header = new Header(
    'div',
    'header-box',
    'h1',
    'header-title', 
    'Got a lot of things ToDo').create();

container.prepend(header);

const addButton = new Button('button', 'add-btn', '+').add();

header.append(addButton);

const taskList = new TaskList('task-list');

const boxForModal = document.createElement('div');

new Modal(boxForModal, addButton, (taskData) => {
    taskList.addTask(taskData);
});

container.append(boxForModal);