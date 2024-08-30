export default class Header {
    constructor(parent, parentClass, title, titleClass, titleText) {
        this.parent = document.createElement(parent);
        this.parent.classList.add(parentClass);
        this.title = document.createElement(title);
        this.title.classList.add(titleClass);
        this.title.textContent = titleText;
    }

    create() {
        this.parent.append(this.title);
        return this.parent;
    }
}