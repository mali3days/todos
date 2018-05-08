window.addEventListener( 'load', renderPosts() );
let form = document.getElementById( 'postForm' );
form.elements.submit.addEventListener( 'click', onCreatePost );

function renderPost( item ) {
    let post = `<li class = 'cart' data-id = '${item.id}'>` +
               `<span>${item.userId}</span>` +
               `<h3>${item.title}</h3>` +
               `<p>${item.body}</p>` +
               `<button class = 'btn btn-outline-danger' onclick = 'onDeletePost(event)'>Delete Post</button>` +
               `</li>`;
    document.getElementById( 'posts' ).innerHTML += post;
}

function renderPosts(){
    fetch( 'http://localhost:3001/posts/' )
        .then( ( res ) => {
            return res.json()
        } )
        .then( ( res ) => {
            document.getElementById('posts').innerHTML = '';
            res.reverse().forEach( ( item ) => {
                renderPost( item )
            } )
        } );
}

function onCreatePost( e ) {
    e.preventDefault();
    let { userId, title, body } = form.elements;
    if( !userId.value || !body.value ){
        return false;
    }
    let payload = {
        userId: userId.value,
        title: title.value,
        body: body.value
    };
    payload = JSON.stringify(payload);
    fetch('http://localhost:3001/posts',
        {
            method: 'POST',
            body: payload,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        })
        .then( ( res ) => {
            if( res.status === 201 ) {
                renderPosts();
            }
        } );
    userId.value = '';
    title.value = '';
    body.value = '';
}

function onDeletePost(e) {
    const id = e.target.parentElement.dataset.id;
    const url = 'http://localhost:3001/posts/' + id;
    fetch(url, {
        method: 'DELETE'
    })
        .then( ( res) => {
            if( res.status === 200 ){
                renderPosts();
            }
        } )
}