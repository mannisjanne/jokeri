
var h3 = document.querySelector('h3');
var button = document.querySelector('button');
var teksti = document.querySelector('p');
var table = document.querySelector('table');

var jokeriRivit = 0;

function generateNewRow() {
    var newRow = document.createElement('tr');
    
    for (var i = 0; i < 7; i++) {
        var newCell = document.createElement('td');
        var randomNumber = Math.floor(Math.random() * 10);
        newCell.textContent = randomNumber;
        newRow.appendChild(newCell);
    }
    
    table.appendChild(newRow);
    
    jokeriRivit++;
    
    teksti.textContent = 'Valmiita rivejä ' + jokeriRivit;
}

function buttonClickHandler() {
    generateNewRow();
}

button.addEventListener('click', buttonClickHandler);