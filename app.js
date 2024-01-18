document.getElementById('container');

document.querySelector('#container');

document.querySelectorAll('.second');

const third = document.querySelector('ol .third');

third.textContent = 'Hello!';

const footer = document.querySelector('.footer');

footer.classList.add('main');

footer.classList.remove('main');

const newLi = document.createElement('li');

newLi.innerText = 'four';

const list = document.querySelector('ul');
list.appendChild(newLi);

const liInsideOl = document.querySelectorAll('ol li');

for(let i = 0; i < liInsideOl.length; i++){
    liInsideOl[i].style.backgroundColor = 'green';
}

footer.remove();