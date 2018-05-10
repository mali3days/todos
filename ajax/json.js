

fetch('http://localhost:3000/posts')// http://localhost:3000/posts/1
    .then(function(response) {
        return response.json();
    })
    .then(function(posts) {
        f(posts);
    })
    .catch( alert );

function f(posts) {
    for (let i=0; i< posts.length; i++) {

        let divPost = document.createElement('div');
        divPost.className = 'divPost';
        divPost.id = posts[i]['id'];

        let spanA = document.createElement('span');
        spanA.innerHTML = `${posts[i].author}`;
        divPost.appendChild(spanA);

        let spanT = document.createElement('span');
        spanT.className = 'spanT';
        spanT.innerHTML = `${posts[i].title}`;
        divPost.appendChild(spanT);

        let del = document.createElement('button');
        del.className = 'delete';
        del.innerHTML = 'Delete';
        del.addEventListener('click', function(){
           remove(posts[i]['id']);
        }, false);
        divPost.appendChild(del);

        document.body.appendChild(divPost);
    }
}


function remove (id) {
    return fetch('http://localhost:3000/posts/' + id, {
        method: 'delete'
    })
    .then(json =>{
        if (json.status == 200) {
            document.getElementById(id).remove();
        }
    });
}

let btnSubmit = document.querySelector('.submit-btn');
btnSubmit.addEventListener('click', postFunc)

function add (event) {

    let divPost = document.createElement('div');
    divPost.className = 'divPost';

    let spanA = document.createElement('span');
    spanA.innerHTML = event.author;
    divPost.appendChild(spanA);

    let spanT = document.createElement('span');
    spanT.className = 'spanT';
    spanT.innerHTML = event.title;
    divPost.appendChild(spanT);

    let del = document.createElement('button');
    del.className = 'delete';
    del.innerHTML = 'Delete';
    del.addEventListener('click', function(){
        remove(event[i]['id']);
    }, false);
    divPost.appendChild(del);

    document.body.appendChild(divPost);

};


function postFunc () {
    let authorText = document.querySelector('.author-text');
    let titleText = document.querySelector('.title-text');
    let obj = {
        title: titleText.value,
        author: authorText.value
    };

    var data = JSON.stringify(obj);
    console.log(data)

    fetch('http://localhost:3000/posts/', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    })
    .then(obj => {return obj.json()})
        .then(responce => {

            add(responce);
        })
};




//array.author

