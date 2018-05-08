const url = 'https://dog.ceo/api/breeds/image/random';
let btn = document.createElement('button');
btn.innerHTML = 'add new img';
document.body.insertAdjacentElement('afterbegin', btn);
let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
btn.addEventListener('click', () => {
    let block = document.createElement('div');
    block.classList.add('column');

    let loader = document.createElement('div');
    loader.classList.add('loader');
    block.appendChild(loader)
    container.appendChild(block);
    axios.get(url)
        .then(response => {
            createBlock(block, response.data.message)
        });

});
function createBlock(block, src){

    let img = document.createElement('img');
    img.setAttribute('src', src);
    block.appendChild(img);

    container.scrollTop = 9999;
    block.querySelector('.loader').remove()


}
