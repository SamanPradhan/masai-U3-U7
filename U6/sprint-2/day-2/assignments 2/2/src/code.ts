type section = "Fiction" | "Documentary" | "Educational";

export class Book {
  section: section;
  name: string;
  constructor(section: section, name: string) {
    this.section = section;
    this.name = name;
  }
}

export class Section {
  name: section;
  books: Book[];
  constructor(name: section) {
    this.name = name;
    this.books = [];
  }
  addBook(book: Book) {
    this.books.push(book);
  }
}

export class Library {
  name: string;
  sections: Section[];
  constructor(name: string) {
    this.name = name;
    this.sections = [];
  }
  addSection(section: Section) {
    this.sections.push(section);
  }
}
