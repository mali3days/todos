
    document.body.addEventListener('click', progres, false);
    let newForm = document.createElement('div');
    newForm.className = "goods radius";
 
 
    let divHead = document.createElement('div');
    divHead.className = "head-title radius";
    newForm.appendChild(divHead);
 
 
    let pTitle = document.createElement('p');
    pTitle.textContent = '';
    divHead.appendChild(pTitle);
 
 
    let divGoods = document.createElement('div');
    divGoods.className = "goods-conteiner";
    newForm.appendChild(divGoods);
 
 
    let ul = document.createElement('ul');
    ul.className = "block-margin";
    divGoods.appendChild(ul);
 
 
    let divTarget = document.createElement('div');
    divTarget.className = "target-goods container radius";
    newForm.appendChild(divTarget);
	 
	let textInput = document.createElement('input');
    textInput.className = 'text';
    divTarget.appendChild(textInput);
 
	let button = document.createElement('button');
    button.className = 'add';
    button.innerHTML = 'buy';
    button.addEventListener('click', addGoods, false);
	divTarget.appendChild(button);

    let divFooter = document.createElement('div');
    divFooter.className = "footer";
    newForm.appendChild(divFooter);
 
 
    let divContainer = document.createElement('div');
    divContainer.className = "prog container radius";
    divFooter.appendChild(divContainer);
 
 
    let divProgress = document.createElement('div');
    divContainer.appendChild(divProgress);
 
 
    let progress = document.createElement('progress');
    divProgress.className = "color-progress";
    progress.setAttribute('max', 100);
    progress.setAttribute('value', '');
    divProgress.appendChild(progress);
 
 
    let divPercentages = document.createElement('div');
    divPercentages.className = "percentages";
    divContainer.appendChild(divPercentages);
	

 function  addGoods() {
    let li = document.createElement('li'); 
    li.classList.add('listStyle');
	ul.appendChild(li);
	
	let checkbox =document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.setAttribute('type', 'checkbox');
	li.appendChild(checkbox);

	let span = document.createElement('span');
	span.innerText = textInput.value;
	li.appendChild(span);
	
	let cardTarget = document.createElement('input');
    cardTarget.value = textInput.value;
    cardTarget.className = 'toggle-input';
    textInput.value = '';
	li.appendChild(cardTarget);
	
	let rectify = document.createElement('button');
	rectify.innerHTML = 'toFix';
	rectify.className = 'rectify';
	rectify.addEventListener('click', toFix, false);
	li.appendChild(rectify);
	
	let del = document.createElement('button');
    del.className = 'delete';
    del.innerHTML = 'Delete';
    del.addEventListener('click', remove, false);
	li.appendChild(del);		
	
 };
 
 function progres() {
     let checked = 0;
     let count = 0;

     let result = document.querySelector('.percentages');
     checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
     count = document.querySelectorAll('input[type="checkbox"]').length;
     let percent = Math.round((checked / count) * 100);
     result.innerHTML = `${percent} %`;
     let colorTag = document.getElementsByTagName('progress')[0].value = percent;
    }

  function toFix(event) {
        let span = event.target.previousSibling.previousSibling;
        span.classList.toggle('toggle-span');
        let cardTarget = event.target.previousSibling;
        cardTarget.classList.toggle('toggle-input');
        span.innerText = cardTarget.value;
    }
 
 function remove() {
        this.parentElement.remove();
    }

document.body.appendChild(newForm); 

