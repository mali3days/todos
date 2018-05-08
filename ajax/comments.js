function createPosts() {
    let body = document.body;

    let formContainer = document.createElement('div');
    body.appendChild(formContainer);

    let titleForm = document.createElement('textarea');
    titleForm.setAttribute('placeholder', 'Enter title...');
    titleForm.setAttribute('cols', '50');
    titleForm.setAttribute('rows', '1');
    formContainer.appendChild(titleForm);

    let textForm = document.createElement('textarea');
    textForm.setAttribute('placeholder', 'Enter comment...');
    textForm.setAttribute('cols', '100');
    textForm.setAttribute('rows', '8');
    formContainer.appendChild(textForm);

    let addPostBtn = document.createElement('button');
    addPostBtn.innerText = 'Add post';
    formContainer.appendChild(addPostBtn);

    let showPostsBtn = document.createElement('button');
    showPostsBtn.innerText = 'Show posts';
    formContainer.appendChild(showPostsBtn);

    showPostsBtn.addEventListener('click', showPosts);
    addPostBtn.addEventListener('click', addPost);

    function editPost(event) {
        if(event.target.innerText == 'Edit comment') {
            let parent = event.target.closest('div');

            let editContainer = document.createElement('div');
            parent.appendChild(editContainer);

            let editTitle = document.createElement('textarea');
            editTitle.setAttribute('placeholder', 'Enter title...');
            editTitle.setAttribute('cols', '50');
            editTitle.setAttribute('rows', '2');
            console.log(parent.firstChild)
            editTitle.value = parent.firstChild.innerHTML.split('<')[0];
            editContainer.appendChild(editTitle);

            let editForm = document.createElement('textarea');
            editForm.setAttribute('placeholder', 'Enter comment...');
            editForm.setAttribute('cols', '100');
            editForm.setAttribute('rows', '8');
            editForm.value = parent.childNodes[1].innerText;
            editContainer.appendChild(editForm);

            let changePostBtn = document.createElement('button');
            changePostBtn.innerText = 'Change post';
            editContainer.appendChild(changePostBtn);

            changePostBtn.addEventListener('click', applyChange);

            function applyChange() {
                if (editForm.value && editTitle.value) {
                    let tmp = event.target.closest('div');
                    let editedPost = {userId: tmp.dataset.userId, id: tmp.dataset.id, title: editTitle.value, body: editForm.value};
                    editedPost = JSON.stringify(editedPost);
                    fetch('http://localhost:3040/posts/' + event.target.closest('div').dataset.id, {
                        method: 'PUT', body: editedPost, headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                    })
                        .then((response) => {
                            if(response.status == '200' || response.status == '201' && showPostsBtn.innerText == 'Hide posts') {

                                tmp.firstChild.remove();

                                let title = document.createElement('h3');
                                title.innerText = editTitle.value;
                                tmp.insertBefore(title, tmp.firstChild);

                                let editBtn = document.createElement('button');
                                editBtn.innerText = 'Edit comment';
                                title.appendChild(editBtn);

                                let rmBtn = document.createElement('button');
                                rmBtn.innerText = 'Remove comment';
                                title.appendChild(rmBtn);

                                tmp.childNodes[1].innerText = editForm.value;
                                tmp.lastChild.remove();
                            }
                        })
                        .catch(e => console.error(e));
                } else if(editForm.value && !editTitle.value) {
                    alert('Fill title');
                } else if(!editForm.value && editTitle.value) {
                    alert('Fill post body');
                } else {
                    alert('Fill all fields of form');
                }
                }

        }
    }

    function rmPost(event) {
        if(event.target.innerText == 'Remove comment') {
            fetch('http://localhost:3040/posts/' + event.target.closest('div').dataset.id, {
                method: 'DELETE', headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
                .then((response) => {
                    if(response.status == '200' || response.status == '201' && showPostsBtn.innerText == 'Hide posts' && event.target.innerText == 'Remove comment') {
                        event.target.closest('div').remove();
                    }
                })
                .catch(e => console.error(e));
        }
    }

    function addPost() {
        if (textForm.value && titleForm.value) {
            let newPost = {userId: 'n', title: titleForm.value, body: textForm.value};
            newPost = JSON.stringify(newPost);

            fetch('http://localhost:3040/posts/', {
                method: 'POST', body: newPost, headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
            })
                .then((response) => {
                    console.log();
                    if(response.status == '200' || response.status == '201' && showPostsBtn.innerText == 'Hide posts') {
                        let commentContainer = document.createElement('div');

                        let title = document.createElement('h3');
                        title.innerText = titleForm.value;
                        commentContainer.appendChild(title);

                        let editBtn = document.createElement('button');
                        editBtn.innerText = 'Edit comment';
                        title.appendChild(editBtn);

                        let rmBtn = document.createElement('button');
                        rmBtn.innerText = 'Remove comment';
                        title.appendChild(rmBtn);

                        let paragraph = document.createElement('p');
                        paragraph.innerText = textForm.value;
                        commentContainer.dataset.id = parseInt(body.lastChild.firstChild.dataset.id) + 1;
                        commentContainer.dataset.userId = postsList[i].userId;
                        commentContainer.appendChild(paragraph);

                        let container = body.lastChild;
                        container.insertBefore(commentContainer, container.firstChild);
                    }
                })
                .catch(e => console.error(e));
        } else if(textForm.value && !titleForm.value) {
            alert('Fill title');
        } else if(!textForm.value && titleForm.value) {
            alert('Fill post body');
        } else {
            alert('Fill all fields of form');
        }
    }

    function showPosts() {
        if (showPostsBtn.innerText == 'Show posts') {
            fetch('http://localhost:3040/posts/', {method: 'GET'})
                .then(response => {
                    return response.json();
                })
                .then(postsList => {
                    let container = document.createElement('div');
                    body.appendChild(container);

                    for (let i = postsList.length - 1; i >= 0; i--) {
                        let commentContainer = document.createElement('div');

                        let title = document.createElement('h3');
                        title.innerText = postsList[i].title;
                        commentContainer.appendChild(title);

                        let editBtn = document.createElement('button');
                        editBtn.innerText = 'Edit comment';
                        title.appendChild(editBtn);

                        let rmBtn = document.createElement('button');
                        rmBtn.innerText = 'Remove comment';
                        title.appendChild(rmBtn);

                        let paragraph = document.createElement('p');
                        paragraph.innerText = postsList[i].body;
                        commentContainer.dataset.id = postsList[i].id;
                        commentContainer.dataset.userId = postsList[i].userId;
                        commentContainer.appendChild(paragraph);

                        container.appendChild(commentContainer);
                    }
                    showPostsBtn.innerText = 'Hide posts';
                    container.addEventListener('click', rmPost);
                    container.addEventListener('click', editPost);
                })
                .catch(e => console.error(e));
        } else {
            body.lastChild.remove();
            showPostsBtn.innerText = 'Show posts';
        }

    }
}

window.addEventListener('load', createPosts);