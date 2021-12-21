const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const price = document.getElementById('price');
const date = document.getElementById('date');
const email = document.getElementById('email');
const petSelect = document.getElementById('pet-select');
var radiosName = document.getElementsByClassName
var bookType = document.querySelectorAll('input[type=radio]');
var table = document.getElementById("testings");

















class Books {
    constructor(title, author, price, date, email, petSelect, bookType) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.date = date;
        this.email = email;
        this.petSelect = petSelect;
        this.bookType = bookType;

    }
}



let fos = new Books(title.value, author.value, price.value, date.value, email.value, petSelect.value, bookType.value);
var formes = [];
function add() 
{
    formes.push(fos);
    title.value ="";
    author.value ="";
    price.value ="";
    date.value ="";
    email.value ="";
    petSelect.value ="";
    bookType.value ="";
}
function show() {
    for(var i = 0;i<formes.length; i++){
        var row = table.insertRow();
        var cell = row.insertCell();
        cell.innerHTML = formes[i];
    }
    
}