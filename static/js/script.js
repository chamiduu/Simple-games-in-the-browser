// Challenge 1: Your age in days

function ageInDays() {
    let birthYear = prompt('What year were you born?');
    let ageInDayss = (2020 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id', 'ageInDayss');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

}

function reset() {
    document.getElementById('ageInDayss').remove();
}

// Challenge 2: Cat Generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);
}

function resetCats() {
    document.getElementById('flex-cat-gen').remove();
}


