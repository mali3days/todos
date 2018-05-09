const displayCards = document.querySelector('.display-cards');
const cardsList = document.createElement('ul');
cardsList.classList.add('card-list');
displayCards.appendChild(cardsList);

fetch('http://localhost:3000/phones')
	.then(
		function (response) {
			if(response.status != 200) {
				alert('We have a problem ' + response.status);
			}

			response.json().then(function(data){
				renderData(data)
			})
		}
	)
	.catch(function(err){
		console.log('Fetch error ', err)
	});

function renderData(data) {
	for(let i = 0; i < data.length; i++) {
		renderElement(data[i]);
	}
}

let cardName = document.querySelector('.card-name');
let cardSnippet = document.querySelector('.card-snippet');
const createCard = document.querySelector('.create-card');

createCard.addEventListener('click', createElement);

function createElement(event) {
	event.preventDefault();
	if(!cardName.value || !cardSnippet.value) {
		alert('Enter name and snippet')
		return;
	}
	let element = {name: cardName.value, snippet: cardSnippet.value};

	fetch('http://localhost:3000/phones', {
		method: 'post',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify(element)})

		.then((response) => response.json())
		.then((response) => renderElement(response))
		.catch((response) => alert('Error' + response.status));

	cardName.value = null;
	cardSnippet.value = null;
}

function renderElement(element) {

	const fragment = document.createDocumentFragment();

	const item = document.createElement('li');
	item.classList.add('card');
	item.setAttribute('data-id', element.id);
	fragment.appendChild(item);

	const deleteItem = document.createElement('div');
	deleteItem.classList.add('delete-item');
	const span = document.createElement('span');
	span.classList.add('delete-wrapper');
	span.innerHTML = "<i class=\"far fa-times-circle\"></i>";
	deleteItem.appendChild(span);
	item.appendChild(deleteItem);

	span.addEventListener('click', removeItem);

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('card-title');
	cardTitle.textContent = element.name;
	item.appendChild(cardTitle);

	const cardSnippet = document.createElement('div');
	cardSnippet.classList.add('card-snippet');
	cardSnippet.textContent = element.snippet;
	item.appendChild(cardSnippet);

	cardsList.appendChild(fragment);
}

function removeItem(event) {
	let parentCard = event.target.closest('.card');
	let id = parentCard.getAttribute('data-id');


	fetch(`http://localhost:3000/phones/${id}`, {
		method: 'delete',
	})
		.then((response) => {
			if(response.status == 200) parentCard.remove();
		})
		.catch((response) => alert("Error! " + response.status));
}










