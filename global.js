let templateForCards = document.createDocumentFragment();

let cardList = document.createElement('div');
cardList.classList.add('card-list');
templateForCards.appendChild(cardList);

let card = document.createElement('div');
card.classList.add('card');
cardList.appendChild(card);

card.innerHTML = '<div class="card-header">\n' +
	'\t\t\t<div class="card-title">Purchases</div>\n' +
	'\t\t</div>\n' +
	'\t\t<div class="card-wrapper">\n' +
	'\t\t\t<ul class="card-item-list">\n' +
	'\t\t\t</ul>\n' +
	'\t\t</div>\n' +
	'\t\t\t<div class="form-wrapper">\n' +
	'\t\t\t\t<div class="card-wrapper">\n' +
	'\t\t\t\t\t<form action="#" class="form-entering">\n' +
	'\t\t\t\t\t\t<input type="text" class="text-input" placeholder="Enter list item">\n' +
	'\t\t\t\t\t\t<input type="submit" class="text-submit">\n' +
	'\t\t\t\t\t</form>\n' +
	'\t\t\t\t</div>\n' +
	'\t\t\t</div>\n' +
	'\t\t</div>\n' +
	'\n' +
	'\n' +
	'\t\t<div class="card-footer">\n' +
	'\t\t\t<div class="card-wrapper footer-flex">\n' +
	'\t\t\t\t<div class="card-draw-progress">' +
	'<div class="in-progress draw-progress">' +
	'</div>' +
	'\t\t\t</div>\n' +
	'\n' +
	'\t\t</div>' +
	'</div>';
cardList.appendChild(card);

document.body.appendChild(templateForCards);

let mainForm = card.querySelector('.form-entering');
let textInput = mainForm.querySelector('.text-input');
let textSubmit = mainForm.querySelector('.text-submit');
let catalog = card.querySelector('.card-item-list');

function createListItemFragment(value) {

	let listFragment = document.createDocumentFragment();


	let list = document.createElement('li');
	list.classList.add('list-item');
	listFragment.appendChild(list);

	let checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.name = 'check-list';
	checkbox.classList.add('checkbox-input');
	list.appendChild(checkbox);


	let mainContent = document.createElement('div');
	mainContent.classList.add('main-content');
	list.appendChild(mainContent);

	let span = document.createElement('span');
	span.classList.add('card-item-description');
	span.classList.add('span-for-edit');
	span.appendChild(document.createTextNode(value));
	mainContent.appendChild(span);

	let editInput = document.createElement('input');
	editInput.type = 'text';
	editInput.value = value;
	editInput.classList.add('hide');
	editInput.classList.add('card-item-description');
	editInput.classList.add('input-for-edit');
	mainContent.appendChild(editInput);

	let divForImg = document.createElement('div');
	divForImg.classList.add('img');
	divForImg.innerHTML = '<span class="card-img-edit">EDIT</span>' +
		'<span class="card-img-delete">DEL</i></div>';
	list.appendChild(divForImg);

	return listFragment;

}


function publsihElements() {
	if (textInput.value.length == 0) {
		alert("Error! Empty text field");
		return;
	}
	catalog.appendChild(createListItemFragment(textInput.value));
	textInput.value = '';
}

textSubmit.addEventListener('click', publsihElements);

function deleteItem(event) {
	let target = event.target;

	if (!target.classList.contains('card-img-delete')) {
		return;
	}
	while (target.tagName !== event.currentTarget) {
		if (target.tagName == 'LI') {
			target.remove();
			break;
		}
		target = target.parentNode;
	}
}

catalog.addEventListener('click', deleteItem);

let mode = 0;

function editItem(event) {

	let target = event.target;
	if (!target.classList.contains('card-img-edit')) return;

	let editSpan, editInput;
	while (target.tagName !== event.currentTarget) {
		if (target.tagName == 'LI') {
			editSpan = target.querySelector('.span-for-edit');
			editInput = target.querySelector('.input-for-edit');
			break;
		}
		target = target.parentNode;
	}

	if (mode == 1) {
		mode = 0;
		editSpan.innerHTML = editInput.value;
	}

	editSpan.classList.toggle('hide');
	editInput.classList.toggle('hide');
	editInput.autofocus = true;

	mode++;
}

catalog.addEventListener('click', editItem);


function drawProgress(event) {
	let countChecked = 0;
	let target = event.target;
	if (!target.classList.contains('checkbox-input')) return;

	var checkboxList = catalog.querySelectorAll('input[type="checkbox"]');
	for (let i = 0; i < checkboxList.length; i++) {
		if (checkboxList[i].checked) countChecked++;
	}

	let checkedRate = (countChecked / checkboxList.length * 100) + '%';
	console.log(checkedRate);
	let boxInprogerss = card.querySelector('.in-progress');
	boxInprogerss.style.width = checkedRate;
	boxInprogerss.style.background = "#51b736";
}


catalog.addEventListener('click', drawProgress);



