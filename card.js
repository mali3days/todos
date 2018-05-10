const card = document.createElement('div');
card.classList.add('card-param');
card.addEventListener('click', (e) => {
    let liCount = document.getElementsByClassName('list-el').length;
    let checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
    let perc = Math.round((checked / liCount) * 100);
    let result = document.getElementsByClassName('num-percent')[0];
    if (isNaN(perc)) {
        result.innerHTML = '';
    } else {
        result.innerHTML = perc + '%';
    }
    //result.innerHTML = perc + '%';
    let percProgress = document.getElementsByClassName('percent-color')[0];
    // if (isNaN(perc)) {
    //     percProgress.style.width = '0%';
    // } else {
    //     percProgress.style.width = perc + '%';
    // }
    percProgress.style.width = perc + '%';
});

const header = document.createElement('h1');
header.classList.add('main-header');
header.innerText = 'Shopping List';

const headerBlock = document.createElement('div');
headerBlock.classList.add('header');
headerBlock.appendChild(header);
card.appendChild(headerBlock);

const listBlock = document.createElement('ul');
listBlock.classList.add('list');
// listBlock.addEventListener('click', (e) => {
//     console.log('hgghg');
//     let liCount = document.getElementsByClassName('list-el').length;
//     console.log(liCount);
//     let checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
//     console.log(checked);
//     let perc = Math.round((checked / liCount) * 100);
//     console.log(perc);
//     let result = document.getElementsByClassName('num-percent')[0];
//     result.innerHTML = perc + '%';
//     let percProgress = document.getElementsByClassName('percent-color')[0];
//     percProgress.style.width = perc + '%';
// });
card.appendChild(listBlock);

const inputBlock = document.createElement('div');
inputBlock.classList.add('input-block');
const input = document.createElement('input');
input.classList.add('input');
inputBlock.appendChild(input);
const inputButton = document.createElement('button');
inputButton.innerHTML = '+';
inputButton.classList.add('input-btn');
inputBlock.appendChild(inputButton);
card.appendChild(inputBlock);

const footer = document.createElement('footer');
footer.classList.add('footer');
const progBar = document.createElement('div');
progBar.classList.add('progress-bar');
const progPercent = document.createElement('div');
progPercent.classList.add('progress-percent');
const percent = document.createElement('div');
percent.classList.add('percent');
const percentInner = document.createElement('div');
percentInner.classList.add('percent-color');
percent.appendChild(percentInner);
progBar.appendChild(percent);
const numPercent = document.createElement('span');
numPercent.classList.add('num-percent');
progPercent.appendChild(numPercent);
progBar.appendChild(percent);
footer.appendChild(progBar);
footer.appendChild(progPercent);
card.appendChild(footer);

document.body.appendChild(card);
