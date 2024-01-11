/* Задача 1 */

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;    
    }

    fix() {
        this.state *= 1.5;
        if (this.state > 100) {
            this.state = 100;
        }
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }    
    }

    get state() {
        return this._state;
    }    
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

/* Задача 2 */

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if ((type === "name" && value === book.name) || (type === "author" && value === book.author) || (type === "releaseDate" && value === book.releaseDate) || (type === "pagesCount" && value === book.pagesCount)) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let book of this.books) {
            if (book.name === bookName) {
                this.books.splice(this.books.indexOf(book), 1)
                return book;
            }
        }
        return null;
    }
}

const library = new Library("Библиотека № 70");

const detective = new DetectiveBook("Борис Акунин", "Пиковый Валет", 2005, 256);
const fantastic = new FantasticBook("Нил Стивенсон", "Анафем", 2012, 960);
library.addBook(detective);
library.addBook(fantastic);

const bookOf2023Year = library.findBookBy('releaseDate', 2023);
if (!bookOf2023Year) {
	const newbookOf2023Year = new Book("Кори Джеймс", "Падение Левиафана: Пространство", 2023, 523);
	library.addBook(newbookOf2023Year);
}


const givenBook = library.giveBookByName("Анафем");
givenBook.state = 65;

givenBook.fix();

library.addBook(givenBook);