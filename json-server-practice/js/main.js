(function loadPosts() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:3000/posts/', true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) return;

		if (xhr.status != 200) {
			if(xhr.status == 0) alert('База данных не подключена');
			alert(xhr.status + ': ' + xhr.statusText);
			return;
		}
		render(xhr.responseText);
		}
	xhr.send();
})();

const postsTable = document.querySelector('.posts');
const author = document.querySelector('.text-author');
const title = document.querySelector('.text-title');
const createBtn = document.querySelector('.crete-element');
postsTable.addEventListener('click', deletePost);
postsTable.addEventListener('click', editPost);
createBtn.addEventListener('click', addPost);



function createElement(tag, ...classes) {
	const element = document.createElement(tag);
	for (let i = 0; i < classes.length; i++) {
		element.classList.add(classes[i]);
	}
	return element;
}

function render(arr) {
	let posts = JSON.parse(arr);
	for (let i = 0; i < posts.length; i++) {
		renderPost(posts[i]);
	}
}

function renderPost(post) {
	const fragment = document.createDocumentFragment();

	const raw = createElement('tr', 'post-card');
	raw.setAttribute('data-id', post.id);
	fragment.appendChild(raw);

	const authorCell = createElement('td', 'post-author');
	raw.appendChild(authorCell);

	const author = createElement('span', 'author');
	author.textContent = post.author;
	authorCell.appendChild(author);

	const editAuthor = createElement('input', 'edit-author', 'hide');
	editAuthor.type = "text";
	editAuthor.value = author.textContent;
	authorCell.appendChild(editAuthor);

	const titleCell = createElement('td', 'post-title');
	raw.appendChild(titleCell);

	const title = createElement('span', 'title');
	title.textContent = post.title;
	titleCell.appendChild(title);

	const editTitle = createElement('input', 'edit-title', 'hide');
	editTitle.type = "text";
	editTitle.value = title.textContent;
	titleCell.appendChild(editTitle);

	const edit = createElement('td', 'post-edit');
	raw.appendChild(edit);

	const editWrapper = createElement('span', 'edit');
	editWrapper.innerHTML = '<i class="far fa-edit edit-img"></i> <i class="far fa-save hide save-img"></i>';
	edit.appendChild(editWrapper);

	const postDelete = createElement('td', 'post-delete');
	raw.appendChild(postDelete);

	const deleteWrapper = createElement('span', 'delete');
	deleteWrapper.innerHTML = '<i class="fas fa-times"></i>';
	postDelete.appendChild(deleteWrapper);

	postsTable.appendChild(fragment);
}

function addPost(event) {
	event.preventDefault();
	if (!title.value || !author.value) {
		alert('Enter title and author name!');
		return;
	}
	let post = {title: title.value, author: author.value};

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:3000/posts/', true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) return;

		if (xhr.status != 201) {
			alert(xhr.status + ': ' + xhr.statusText);
			return;
		}
		renderPost(JSON.parse(xhr.responseText));
		};
	xhr.send(JSON.stringify(post));
	title.value = null;
	author.value = null;
};

function deletePost(event){
	if(!event.target.parentNode.classList.contains('delete')) return;

	const parentRaw = event.target.closest('.post-card');
	const parentId = parentRaw.getAttribute('data-id');

	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', `http://localhost:3000/posts/${parentId}`, true);
	xhr.onreadystatechange = function () {
		if (xhr.readyState != 4) return;

		if (xhr.status != 200) {
			alert(xhr.status + ': ' + xhr.statusText);
			return;
		}
		parentRaw.remove();
	};

	xhr.send();
}

function editPost(event) {
	if(!event.target.parentNode.classList.contains('edit')) return;

	const parentRaw = event.target.closest('.post-card');
	const parentId = parentRaw.getAttribute('data-id');
	parentRaw.classList.toggle('edit-mode');

	const editImg = parentRaw.querySelector('.edit-img');
	const saveImg = parentRaw.querySelector('.save-img');

	let title = parentRaw.querySelector('.title');
	let author = parentRaw.querySelector('.author');
	let editAuthor = parentRaw.querySelector('.edit-author');
	let editTitle = parentRaw.querySelector('.edit-title');


	editImg.classList.toggle('hide');
	saveImg.classList.toggle('hide');
	title.classList.toggle('hide');
	author.classList.toggle('hide');
	editAuthor.classList.toggle('hide');
	editTitle.classList.toggle('hide');


	if(!parentRaw.classList.contains('edit-mode')) {
		if (!editAuthor.value || !editTitle.value) {
			alert('Enter title and author name!');
			return;
		}
		let post = {title: editTitle.value, author: editAuthor.value};

		let xhr = new XMLHttpRequest();
		xhr.open('PUT', `http://localhost:3000/posts/${parentId}`, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState != 4) return;

			if (xhr.status != 200) {
				alert(xhr.status + ': ' + xhr.statusText);
				return;
			}
			title.textContent = editTitle.value;
			author.textContent = editAuthor.value;
		};
		xhr.send(JSON.stringify(post));
	}
}







