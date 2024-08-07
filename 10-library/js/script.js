window.addEventListener('DOMContentLoaded', () => {

    const addBookBtn = document.querySelector('[data-modal]'),
          modal = document.querySelector('.modal-switch'),
          modalCloseBtn = document.querySelector('[data-close]'),
          bookCard = document.querySelector('.book-alignment'),
          addForm = document.querySelector('form.modal__add-book'),
          addInputTitle = addForm.querySelector('.input-title'),
          addInputAuthor = addForm.querySelector('.input-author'),
          addInputPages = addForm.querySelector('.input-pages'),
          checkbox = addForm.querySelector('[type="checkbox"]');


    const bookDB = {
        books: []
    };


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        
        const newBookTitle = addInputTitle.value.trim();
        const newBookAuthor = addInputAuthor.value.trim();
        const newBookPages = addInputPages.value.trim();
        const read = checkbox.checked;

        if (newBookTitle && newBookAuthor && newBookPages) {
            const newBook = {
                title: newBookTitle,
                author: newBookAuthor,
                pages: newBookPages,
                read: read
            };

            bookDB.books.push(newBook);

            createBookCard(bookDB.books, bookCard);
        }

        event.target.reset();
        closeModal();
    });

    function createBookCard(books, parent) {
        parent.innerHTML = '';

        books.forEach((book, index) => {
            parent.innerHTML += `
                <div class="main__book-card">
                    <div class="main__book-content">
                        <p class="book-title">Title: ${book.title}</p>
                        <p class="book-author">Author: ${book.author}</p>
                        <p class="book-pages">Pages: ${book.pages}</p>
                        ${book.read ? 
                            '<button id="check-stat" class="book-card-btn btn light-green">Read</button>'
                            :
                            '<button id="check-stat" class="book-card-btn btn gray">Unread</button> ' 
                        }
                        <button id="remove" class="book-card-btn btn">Remove</button>
                    </div>
                </div>
            `;
        });

        document.querySelectorAll('#remove').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.parentElement.remove();
                bookDB.books.splice(i, 1);
            });
        });
    }

    createBookCard(bookDB.books, bookCard);

    // MODAL

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }

    addBookBtn.addEventListener('click', openModal);

    modalCloseBtn.addEventListener('click', closeModal);

});
