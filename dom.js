
 document.addEventListener('DOMContentLoaded', () => {
  const fragment = document.createDocumentFragment();
  const body = document.querySelector('body');
  const container = document.createElement('form');
  const button = document.createElement('button');
  container.className = 'container';

  const addedElements = function(elem, arr) {
    for(let i = 0; i< arr.length; i++) {
      elem.appendChild(arr[i]);
    }
  }

  // Button added li
  const addedEl = function(el, containe) {
    const list = containe.querySelector('.list');
    const cell = document.createElement('li');
    const checkbox = document.createElement('input');
    const inputCell = document.createElement('input');
    // const changeBtn = document.createElement('button');
    const removeCell = document.createElement('button');

    list.className = 'list';
    cell.className = 'cell animated slideInDown';
    checkbox.className = 'cell__checkbox';
    checkbox.type = 'checkbox';
    inputCell.className = 'cell__input';
    inputCell.type = 'text';
    inputCell.style.cursor = 'pointer';
    inputCell.readOnly = true;
    // changeBtn.className = 'button cell__edit fas fa-edit';
    // changeBtn.type = 'button';
    removeCell.className = 'button cell__remove fas fa-times';
    removeCell.type = 'button';
    inputCell.value = el;
    addedElements(cell, [checkbox, inputCell, removeCell]);
    addedElements(list, [cell]);
  };

  const lists = function() {
    const fragment = document.createDocumentFragment();
    {
      const headerContainer = document.createElement('input');
      headerContainer.className = 'header';
      headerContainer.value = 'Прайс';
      headerContainer.readOnly = true;
      headerContainer.innerText = 'Покупки';
      fragment.appendChild(headerContainer)
    };

    {
      const list = document.createElement('ul');
      list.className = 'list';
      fragment.appendChild(list)
    };

    {
      const divAdded = document.createElement('div');
      const writeInput = document.createElement('input');
      const add = document.createElement('button');
  
      divAdded.className = 'added';
      writeInput.className = 'added__input';
      add.className = 'button added__btn fas fa-plus';
      add.type = 'button';
  
      addedElements(divAdded, [writeInput, add]);
      addedElements(fragment,[divAdded]);
    };
    {
      const footer = document.createElement('div');
      const progress = document.createElement('div');
      const scale = document.createElement('div');
      const percent = document.createElement('div');
  
      footer.className = 'footer';
      progress.className = 'footer__prog';
      percent.className = 'footer__proc';
      percent.innerText = '00%';
      scale.classList = 'footer__sh';
  
      footer.appendChild(progress);
      progress.appendChild(scale);
      footer.appendChild(percent);
      fragment.appendChild(footer);
    };

    addedEl('', fragment);

    return fragment;
  }

  // Added element in body
  container.appendChild(lists());

  // addedEl('', container);

  let click = 0;

  const getClick = (ev) => {
    setTimeout(function () {
      click = 0;
    }, 300);
    click += 1;
    if(click === 2) {
      ev.target.readOnly = false;
      click = 0;
    }

    ev.target.addEventListener('blur', function() {
      ev.target.readOnly = true;
    });
    ev.target.classList.add('writen');
  }

  body.addEventListener('click', function(ev) {

    const searchParent = function(el, type) {
      if(el.nodeName === type) {
        return el; 
      }
      return searchParent(el.parentElement, type);
    }

    if(ev.target.classList.contains('cell__input')) {
      getClick(ev);
    }

    if(ev.target.classList.contains('header')) {
      getClick(ev);
    }
    
    //added li
    if(ev.target.classList.contains("added__btn")) {
      const added = ev.target.previousSibling;
      addedEl(added.value, searchParent(ev.target, 'FORM'));
    };

    // Change li
    if(ev.target.classList.contains("cell__edit")) {
      ev.target.classList.toggle('edit');
      if(ev.target.classList.contains('edit')) {
        ev.target.previousSibling.readOnly = false;
      } else {
        ev.target.previousSibling.readOnly = true;
      }
    }

    // Progress bar
    if(ev.target.classList.contains("added__btn") ||
       ev.target.classList.contains("cell__checkbox")||
       ev.target.classList.contains("cell__remove")
    ){

      const elem = ev.target;
      const containers = elem.closest('form');
      const list = containers.querySelector('.list');
      const percent = containers.querySelector('.footer__proc');
      const scale = containers.querySelector('.footer__sh');

         //Delete li
      if(ev.target.classList.contains("cell__remove")) {
        searchParent(ev.target, 'UL').removeChild(ev.target.parentElement);
      }

      let check = 0;
      for(let i = 0; i < list.children.length; i++) {
        const box = list.children[i].querySelector('input[type=checkbox]')
        if (box.checked) {
          check += 1;
        }
      } 
      let how = check / list.children.length;
      how = how.toFixed(2).replace(/^0\.+/, '');
      if(how == 1.0) {
        how = 100;
      } 

      if(isNaN(how)) {
        percent.innerText = '00' + '%';
      } else  {
        percent.innerText = how + '%';
      }
      scale.style.width = how + '%';
    }
  })

  button.addEventListener('click', function() {
    const co = document.createElement('form');
    co.classList.add('container');
    co.appendChild(lists())
    body.appendChild(co);
  });

  addedElements(fragment, [container, button]);
  body.appendChild(fragment);
  })