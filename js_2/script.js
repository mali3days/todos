window.addEventListener('load', function(){
    let body = document.querySelector('body');
    body.innerHTML = "<main><h1></h1><ul></ul><div><input><button></button></div></main>";

    let container = document.querySelector('main');
    container.classList.add('container');

    let title = document.querySelector('h1');
    title.classList.add('global-title');
    title.innerHTML = 'Shopping list';

    let list = document.querySelector('ul');
    list.classList.add('list');

    let inputWrap = document.getElementsByTagName('div')[0];
    inputWrap.classList.add('input-inner');

    let enterData = document.querySelector('input');
    enterData.classList.add('enterData');

    let button = document.querySelector('button');
    button.classList.add('btn', 'input-save');
    button.innerHTML = 'Add to list';

    button.addEventListener('click', addListElement, false);
   
    
    function addListElement() {
        let li = getElem('li', 'list-item');
    
        let checkbox = getElem('input', 'list-check');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'checklist');
    
        let text = getElem('input', 'list-item-text');
        text.value = enterData.value;
        text.disabled = true;
    
        let editItem = getElem('button', 'btn');
        editItem.classList.add('editElemList');
        editItem.innerHTML = 'Edit';
        editItem.addEventListener('click', changeText, false);
    
        let deleteItem = getElem('button', 'btn');
        deleteItem.classList.add('deleteElemList');
        deleteItem.innerHTML = 'Del';
        deleteItem.addEventListener('click', removeListElement, false);
    
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(editItem);
        li.appendChild(deleteItem);
        list.appendChild(li);
        enterData.value = '';
    }
    function removeListElement() { 
        this.parentElement.remove();
    }
    
    function changeText() {
        let text = this.previousSibling;
        text.disabled = false;
        text.focus();
    }
    
}, false)
function getElem(elem, elemClass) {
    let element = document.createElement(elem);
    element.classList.add(elemClass);

    return element;
}
