class Book {
  constructor(name, author, section) {
    this.name = name;
    this.author = author;
    this.section = section;
  }
}

class Section {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBookToSection(book) {
    let isBookPresent = this.books.find(
      (curr_item) =>
        curr_item.name === book.name && curr_item.author === book.author
    );

    if (isBookPresent == undefined) {
      this.books.push(book);
    }
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.sections = [];
  }

  addSection(section) {
    let isSectionPresent = this.sections.find(
      (curr_item) => curr_item.name == section.name
    );

    if (isSectionPresent === undefined) {
      this.sections.push(section);
    }
  }

  addBookToLibrary(book) {
    let section = this.sections.find(
      (curr_item) => curr_item.name === book.section
    );

    if (section !== undefined) {
      section.addBookToSection(book);
    }
  }
}

// Do not change the export statement below

export { Library, Section, Book };
