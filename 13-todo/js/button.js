export default class Button {
    constructor(parent, parentClass, text) {
        this.parent = document.createElement(parent);
        this.parent.classList.add(parentClass);
        this.parent.textContent = text;
    }

    add() {
        return this.parent;
    }
}
