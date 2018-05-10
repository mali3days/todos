window.addEventListener('load', function(){
    let body = document.querySelector('body');
    body.innerHTML = "<main><h1></h1><ul></ul><div><input><button></button></div><div><span></span></div></main>";
    
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

    let statusContainer = document.getElementsByTagName('div')[1];
    statusContainer.classList.add('status-container');

    let statusPercent = document.querySelector('span');
    statusPercent.classList.add('status-fill')

    button.addEventListener('click', addListElement, false);
   
    
    function addListElement() {
        let li = getElem('li', 'list-item');
    
        let checkbox = getElem('input', 'list-check');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'checklist');
        checkbox.addEventListener('click', checkboxCheck, false);
    
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
        checkboxCheck()
    }

    function removeListElement() { 
        this.parentElement.remove();
        checkboxCheck()
    }
    
    function changeText() {
        let text = this.previousSibling;
        text.disabled = false;
        text.focus();
    }

    function checkboxCheck() {
        let checkboxes = document.querySelectorAll('li');
        let checkAmount = checkboxes.length;
        let checked = document.querySelectorAll('input[type="checkbox"]:checked');
        let checkedAmount = checked.length;

        let fill = checkedAmount*100/checkAmount;
        let fillContainer = document.querySelector('.status-fill');
        fillContainer.style.width = fill+'%';
    }
    
}, false)
function getElem(elem, elemClass) {
    let element = document.createElement(elem);
    element.classList.add(elemClass);

    return element;
}
