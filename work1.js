let firstCard = document.createElement('div');
firstCard.className = 'card';

let img1 = document.createElement('img');
img1.src = 'etc.jpg';

let heading = document.createElement('heading');
heading.textContent = 'CodeQueen';

let firstPar = document.createElement('p');
firstPar.textContent = 'Code queen is very interesting';

firstCard.appendChild(img1);
firstCard.appendChild(heading);
firstCard.appendChild(firstPar);

let container = document.querySelector('div.container');
container.appendChild(firstCard);

//second card
let secCard = document.createElement('div');
secCard.className = 'card';

let img2 = document.createElement('img');
img2.src = 'etc.jpg';

let heading2 = document.createElement('h3');
heading2.textContent = 'ETC';

let secPar = document.createElement('p');
secPar.textContent = 'Educating the children is something very amazing';

secCard.appendChild(img2);
secCard.appendChild(heading2);
secCard.appendChild(secPar);

container.appendChild(secCard);

var styles = {
    "background-color": "honeydew",
    "margin":"30px",
    "width":"250px",
    "color":"green",
    "border-radius": "2%"
}
var styles2 = {
    "flex-wrap": "wrap",
    "justify-content": "center",
     "flex-basis": "content",
    "margin-top": "5px",
 }

var img = {
    "width": "150px",
    "padding-top": "10px",
    "border-radius": "50%"

}

var obj = document.getElementById('container');
Object.assign(obj.style, styles2);

Object.assign(firstCard.style, styles);
Object.assign(secCard.style, styles);

Object.assign(img1.style, img)
Object.assign(img2.style, img)