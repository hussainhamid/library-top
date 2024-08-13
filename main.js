const card = document.querySelector(".card");
const addBtn = document.getElementById("add");
const addBtn2 = document.getElementById("add-from-dialog");
const dialog = document.querySelector("dialog");

let myLibrary = [];

class book {
  constructor() {
    this.title = title;
    this.author = author;
    this.page = page;
  }
}

function addBookToLibrary() {
  let bookTitle = document.getElementById("title").value;
  let bookAuthor = document.getElementById("author").value;
  let bookPages = document.getElementById("page").value;

  const newBook = new book(bookTitle, bookAuthor, bookPages);
  myLibrary.push(newBook);
}

addBtn.addEventListener("click", function () {
  dialog.showModal();
});
addBtn2.addEventListener("click", function (event) {
  let bookTitle = document.getElementById("title").value;
  let bookAuthor = document.getElementById("author").value;
  let bookPages = document.getElementById("page").value;

  if (!checkValidity()) {
    return;
  }

  event.preventDefault();
  dialog.close();
  newCard = document.createElement("div");
  newCard.className = "card";
  document.body.appendChild(newCard);

  newTitle = document.createElement("p");
  newTitle.className = "info";
  newTitleText = document.createTextNode(`Name: \u00A0\u00A0${bookTitle}`);
  newTitle.appendChild(newTitleText);
  newCard.appendChild(newTitle);

  newAuthor = document.createElement("p");
  newAuthor.className = "info";
  newAuthorText = document.createTextNode(`Author: \u00A0\u00A0${bookAuthor}`);
  newAuthor.appendChild(newAuthorText);
  newCard.appendChild(newAuthor);

  newPage = document.createElement("p");
  newPage.className = "info";
  newPageText = document.createTextNode(`pages: \u00A0\u00A0${bookPages}`);
  newPage.appendChild(newPageText);
  newCard.appendChild(newPage);
});

// form validation code

const bookTitle = document.getElementById("title");
const bookPages = document.getElementById("page");

function checkValidity() {
  let isValid = true;

  bookTitle.addEventListener("input", () => {
    if (bookTitle.validity.valueMissing) {
      bookTitle.setCustomValidity("please fill in the missing field");

      isValid = false;
    } else {
      bookTitle.setCustomValidity("");
      isValid = true;
    }
  });

  bookPages.addEventListener("input", () => {
    if (bookPages.validity.valueMissing) {
      bookPages.setCustomValidity("please fill in the missing field");

      isValid = false;
    } else {
      bookPages.setCustomValidity("");
      isValid = true;
    }
  });

  return isValid;
}
