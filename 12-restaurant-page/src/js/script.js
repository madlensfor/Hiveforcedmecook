import './style.css';
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    //основная стр
    class MainContent {
        constructor(parent, header, subtext) {
            this.parent = document.createElement(parent);
            this.header = document.createElement(header);
            this.subtext = document.createElement(subtext);
        }
        add() {
            this.parent.classList.add('title-box');
            this.header.classList.add('title');
            this.header.textContent = 'Madlensfor';
            this.subtext.classList.add('sub-title');
            this.subtext.textContent = 'very demure, very cutesy';
            this.parent.append(this.header);
            this.parent.append(this.subtext);
            return this.parent;
        }
    }

    const mainContent = new MainContent('div', 'h1', 'p').add();

    container.append(mainContent);

    // Контент боксы для меню
    const contentBox = document.createElement('div'),
          flexBox = document.createElement('div');
    contentBox.classList.add('content-box');
    flexBox.classList.add('flex-box');

    class MenuContent {
        constructor(titles, descriptions, parent) {
            this.titles = titles; // Массив с заголовками
            this.descriptions = descriptions; // Массив с описаниями
            this.parent = parent; // Родительский элемент
        }

        create() {
            this.titles.forEach((title, index) => {
                const titleElement = document.createElement('div');
                titleElement.classList.add('head-item');
                titleElement.textContent = title;
                titleElement.addEventListener('click', () => {
                    this.changeDescription(index);
                });
                this.parent.append(titleElement);
            });

            this.descriptionElement = document.createElement('div');
            this.descriptionElement.classList.add('menu-p');
            this.descriptionElement.textContent = this.descriptions[0]; // Начальное описание
            this.parent.append(this.descriptionElement);

            return this.parent;
        }

        changeDescription(index) {
            this.descriptionElement.textContent = this.descriptions[index];
        }
    }

    const titles = ['Завтраки', 'Основное', 'Напитки'];
    const descriptions = [
    `Овсяная каша с фруктами - 250 ₽ Яичница с беконом и тостами - 350 ₽\nПанкейки с ягодами и медом - 300 ₽\nТост с авокадо и яйцом пашот - 400 ₽\nСырники со сметаной и вареньем - 320 ₽`,
    'Цезарь с курицей - 450 ₽\nПаста Карбонара - 550 ₽\nСтейк из лосося с овощами - 750 ₽\nПицца Маргарита - 500 ₽\nРизотто с грибами - 600 ₽',
    'Капучино - 180 ₽\nЛатте - 200 ₽\nАпельсиновый сок - 150 ₽\nЗеленый чай - 120 ₽\nМинеральная вода - 100 ₽'
];


    const menuContent = new MenuContent(titles, descriptions, flexBox);
    menuContent.create(); 

    contentBox.append(flexBox);

    // о нас 
    const auBox = document.createElement('div');
    auBox.classList.add('about-box');
    const descr = document.createElement('p');
    descr.textContent = 'we are such a cuties patuties please come and eat in our restaurant';
    descr.classList.add('about-title');
    auBox.append(descr);
    container.append(auBox);
    auBox.style.display = 'none';

    function openMainSection() {
        resetClasses();
        container.classList.add('outdoor-caffe');
        mainBtn.classList.add('btn-active');
        mainContent.style.display = 'block';
    }

    function openMenuSection() {
        resetClasses();
        container.classList.add('blue-dish-bg');
        container.append(contentBox);
        menuBtn.classList.add('btn-active');
    }

    function openAboutSection() {
        resetClasses();
        container.classList.add('blue-breakf-bg');
        aboutBtn.classList.add('btn-active');
        auBox.style.display = 'block';
    }

    function resetClasses() {
        container.classList.remove('outdoor-caffe', 'blue-dish-bg', 'blue-breakf-bg');
        mainBtn.classList.remove('btn-active');
        menuBtn.classList.remove('btn-active');
        aboutBtn.classList.remove('btn-active');
        contentBox.remove();
        mainContent.style.display = 'none';
        auBox.style.display = 'none';
    }

    // Создание кнопок
    const btnBox = document.createElement('div');
    btnBox.classList.add('btn-box');
    container.append(btnBox);

    class Button {
        constructor(element, elementClass, innerText, parent) {
            this.element = document.createElement(element);
            this.element.classList.add(elementClass);
            this.element.textContent = innerText;
            parent.append(this.element);
        }

        render() {
            return this.element;
        }
    }

    const mainBtn = new Button('button', 'main-btn', 'Main', btnBox).render();
    const menuBtn = new Button('button', 'menu-btn', 'Menu', btnBox).render();
    const aboutBtn = new Button('button', 'about-btn', 'About Us', btnBox).render();

    mainBtn.addEventListener('click', openMainSection);
    menuBtn.addEventListener('click', openMenuSection);
    aboutBtn.addEventListener('click', openAboutSection);
});