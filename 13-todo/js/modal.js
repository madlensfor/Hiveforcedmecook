export default class Modal {
    constructor(box, triggerId, onSubmit) {
        this.modalElement = box;
        this.triggerElement = triggerId;
        this.onSubmit = onSubmit; 

        this.createModal();
        this.bindEvents();
    }

    createModal() {
        this.modalElement.innerHTML = `
            <div class="modal-switch">
                <div class="modal__content">
                    <form class="modal__add-task" action="#">
                        <div class="modal__align-h">
                            <div class="modal__title">What are you planning to do?</div>
                            <div data-close class="modal__close">&times;</div>
                        </div>
                        <div> <label for="taskTitle">Title: </label> </div>
                        <input name="title" type="text" class="title__input" required maxlength="100">
                        <div> <label for="taskDescription">Description: </label> </div>
                        <textarea class="textarea__input" rows="4" required></textarea>
                        <div class="modal-input-align">
                            <div> 
                                <label for="taskDueDate">Due Date: </label> 
                                <input name="date" type="date" class="modal__input input-date" required max="10000">
                            </div>
                            <div> 
                                <label for="taskPriority">Priority: </label> 
                                <select name="select-priority" class="modal__input">
                                    <option value="urgent">urgent</option>
                                    <option value="idc">idc</option>
                                    <option value="low">low</option>
                                </select>
                            </div>
                        </div>
                        <button class="modal__submit-btn btn" type="submit">Add Task</button>
                    </form>
                </div> 
            </div>
        `;
    }

    bindEvents() {
        const closeButton = this.modalElement.querySelector('[data-close]');
        closeButton.addEventListener('click', this.closeModal.bind(this));
        
        this.triggerElement.addEventListener('click', this.openModal.bind(this));
        
        const form = this.modalElement.querySelector('.modal__add-task');
        form.addEventListener('submit', this.handleSubmit.bind(this));
        
        window.addEventListener('click', this.handleOutsideClick.bind(this));
    }

    openModal() {
        this.modalElement.querySelector('.modal-switch').classList.add('active');
    }

    closeModal() {
        this.modalElement.querySelector('.modal-switch').classList.remove('active');
    }

    handleOutsideClick(event) {
        if (event.target.classList.contains('modal-switch')) {
            this.closeModal();
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const title = this.modalElement.querySelector('input[name="title"]').value;
        const description = this.modalElement.querySelector('.textarea__input').value;
        const date = this.modalElement.querySelector('input[name="date"]').value;
        const priority = this.modalElement.querySelector('select[name="select-priority"]').value;
        
        if (title && description && date && priority) {
            this.onSubmit({ title, description, date, priority });
            this.closeModal();
            event.target.reset();
        }
    }
}