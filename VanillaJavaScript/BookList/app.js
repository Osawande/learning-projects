//Book  
function Book (title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor

function UI (){}


UI.prototype.addBookToList = function(book){ 
    const list = document.querySelector('#book-list');
    //Create tr element
    const row = document.createElement('tr');
    // Insert col 
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

UI.prototype.showAlert = function (message,className){

    //create div
    const div = document.createElement('div');

    // Add class 
    div.className = `alert ${className}`;

    // add Text
    div.appendChild(document.createTextNode(message));

    //Get Parent 
    const container = document.querySelector('.container');

    //Get form
    const form = document.querySelector('#book-form');

    //insert alert
    container.insertBefore(div,form);
    //remove alert after 2 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },2000);
}

UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function (){
    document.querySelector('#title').value = "";
    document.querySelector('#author').value = "";
    document.querySelector('#isbn').value = "";
    
}

// Event Listeners 

document.querySelector('#book-form').addEventListener('submit',function(e){
    const title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;

    const book = new Book(title,author,isbn);
    const ui = new UI();
    //Validate 
    if(title ==='' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields','error');
    } else {
        ui.showAlert('Book added!', 'success');
        // Add book to list 
        ui.addBookToList(book);
        //clear UI fields
        ui.clearFields();
    }

   

   


    e.preventDefault();
});

// Event listener for delete 
document.querySelector('#book-list').addEventListener('click', function (e) {

    const ui = new UI();

    ui.deleteBook(e.target);
    ui.showAlert('book removed', 'success');
    e.preventDefault();
})