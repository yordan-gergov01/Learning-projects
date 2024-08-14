// let title = document.getElementById('mainTitle');
// title.textContent = 'Welcome to JavaScript world!';

// let changedZone = document.getElementById('content');
// changedZone.style.backgroundColor = 'lightblue';

// // let invisible = document.getElementById('footerText');
// // invisible.style.display = 'none';

// let allTitles = document.getElementsByTagName('h3');

// for(let title of allTitles){
//     title.textContent = 'Updated Article Title';
// }

// let para = document.getElementsByTagName('p');
// let count = 0;

// for(let i = 0; i < para.length; i++){
//     count++;
// }
// console.log(count);

// let menu = document.getElementsByClassName('menu-item');
// for(let i = 0; i < menu.length; i++){
//     menu[i].textContent = `Menu Item ${i}`;
// }

// let elements = document.getElementsByClassName('article-title');

// for(let i = 0; i < elements.length; i++){
//     elements[i].style.color = 'green';
//     elements[i].style.fontSize = '30px';
// }

// let elements = document.getElementsByClassName('menu-item');
// console.log(elements.length);

// let updated = document.querySelector('.article-title');
// updated.textContent = 'First Article Updated';

// let changed = document.querySelector('#content p');
// changed.style.backgroundColor = 'lightgreen';

// let newTitles = document.querySelectorAll('.article-title');
// for(let title of newTitles){
//     title.textContent = 'Uprated Article Title';
// }

// let newParaColor = document.querySelectorAll('p');
// for(let i = 0; i < newParaColor.length; i++){
//     newParaColor[i].style.backgroundColor = 'lightgrey';
// }

let article = document.createElement('h3');
article.id = 'new-article';
article.textContent = 'New Article';
let newPlace = document.getElementById('content');
newPlace.appendChild(article);



let paragraph = document.createElement('p');
paragraph.textContent = 'I am a new para!';
newPlace.appendChild(paragraph);

let button = document.createElement('button');
button.textContent = 'Delete Article';
newPlace.appendChild(button);

button.addEventListener('click', function (e){
    e.currentTarget.parentElement.remove();

    let age = prompt('How old are you?');

    if(age < 18){
        alert('Access denied. You must be 18 years or older.')
    }else{
        alert('Access granted, Welcome!');
    }
});

let liElements = document.getElementsByClassName('menu-item');
for(let el of liElements){
    el.addEventListener('click', function(e){
        e.currentTarget.style.backgroundColor = 'yellow';
    });
}

