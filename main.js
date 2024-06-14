const card = document.querySelector(".card");
const addBtn = document.getElementById("add");
const addBtn2 = document.getElementById("add-from-dialog")
const dialog = document.querySelector("dialog");


let myLibrary = [];

function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById("author").value;
    //let bookPages = document.getElementById("pages").value;

    const newBook = new book(title, author);
    myLibrary.push(newBook);
    render()
}

addBookToLibrary()

function render () {

    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
    }

addBtn.addEventListener('click', () => {
    dialog.showModal();
})
    addBtn2.addEventListener("click", function(event) {
        event.preventDefault();
        dialog.close();
        newCard = document.createElement("div");
        newCard.className = "card";
        document.body.appendChild(newCard);

        newTitle = document.createElement("p");
        newTitle.className = "info";
        newTitleText = document.createTextNode("Name: ");
        newTitle.appendChild(newTitleText);1
        newCard.appendChild(newTitle);

        newAuthor = document.createElement("p");
        newAuthor.className = "info";
        newAuthorText = document.createTextNode("Author: ");
        newAuthor.appendChild(newAuthorText);
        newCard.appendChild(newAuthor);

        newPage = document.createElement("p");
        newPage.className = "info";
        newPageText = document.createTextNode("pages: ");
        newPage.appendChild(newPageText);
        newCard.appendChild(newPage);
})
}