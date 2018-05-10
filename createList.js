function createList() {
    const listElement = document.createElement('li');
    listElement.classList.add('list-el');
    const checkBox = document.createElement('input');
    checkBox.classList.add('check-box');
    checkBox.setAttribute('type', 'checkbox');

    const inputText = document.createElement('span');
    inputText.classList.add('input-text');
    const hiddenInput = document.createElement('input');
    hiddenInput.classList.add('input-display');
    hiddenInput.classList.add('hidden');


    const updText = document.createElement('button');
    updText.classList.add('updtext-btn');
    const img = document.createElement('img');
    img.classList.add('img');
    img.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/single-width-stroke/24/oui-icons-50-256.png');
    updText.appendChild(img);
    const reText = document.createElement('button');
    reText.classList.add('retext-btn');
    reText.innerHTML = 'x';
    listElement.appendChild(checkBox);
    listElement.appendChild(inputText);
    listElement.appendChild(hiddenInput);
    listElement.appendChild(updText);
    listElement.appendChild(reText);
    listBlock.appendChild(listElement);
    const cardText = input.value;
    inputText.innerHTML = cardText;
    input.value = null;
    let remButton = listElement.querySelector('.retext-btn');
    remButton.addEventListener('click',  (e) => {

        let conf = confirm('Delete?');
        if (conf) {
            listElement.remove();
        }
    });
    let editBtn = listElement.querySelector('.updtext-btn');
    editBtn.addEventListener('click',  (e) => {
        hiddenInput.classList.remove('hidden');
        inputText.classList.add('hidden');

    });


}
inputButton.addEventListener('click',  function(){
    createList();
});

