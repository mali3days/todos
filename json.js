const inputBlock = document.createElement('div');
inputBlock.classList.add('input-card');
const inputLeft = document.createElement('input');
inputLeft.setAttribute('placeholder', 'author');
const inputRight = document.createElement('input');
inputRight.setAttribute('placeholder', 'title');
const save = document.createElement('button');
save.innerHTML = 'save';
save.addEventListener('click', () => {
    fetch("http://localhost:3000/posts", {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({"author": inputLeft.value, "title": inputRight.value})
    })
        .then((resp)=>resp.json())
        .then((resp)=>{
            let post = document.createElement('div');
            post.classList.add('post-card');
            post.id = resp.id;
            post.innerHTML = `${resp.author} : ${resp.title}`;
            let btnDel = document.createElement('button');
            btnDel.classList.add('btn-del');
            btnDel.innerHTML = 'x';
            document.body.appendChild(post);
            document.body.appendChild(btnDel);
            inputLeft.value = null;
            inputRight.value = null;
        })
})

inputBlock.appendChild(inputLeft);
inputBlock.appendChild(inputRight);
inputBlock.appendChild(save);

document.body.appendChild(inputBlock);



function render() {
    fetch('http://localhost:3000/posts')
        .then((resp)=>resp.json())
        .then((resp)=> {
            for(let i = 0; i < resp.length; i++) {
                let post = document.createElement('div');
                post.classList.add('post-card');
                post.innerHTML = `${resp[i].author} : ${resp[i].title}`;
                post.id = resp[i].id;
                let btnDel = document.createElement('button');
                btnDel.classList.add('btn-del');
                btnDel.innerHTML = 'x';
                btnDel.addEventListener('click', ()=> {
                    let id = btnDel.previousSibling.id;
                    fetch(`http://localhost:3000/posts/${id}`, {method: 'DELETE'})
                        .then(res => res.json())
                    //.then(res => {
                    //console.log(res)
                    //})
                    btnDel.previousSibling.remove();
                    btnDel.remove();
                    //let arr = btnDel.previousSibling.innerHTML.split(':');
                    //console.log (arr);
                })
                document.body.appendChild(post);
                document.body.appendChild(btnDel);
            }
        })

}

render();

//const remove = (e) => {
//  let btnDel = document.
//  let id = btnDel.previousSibling.id;
//  console.log (id);
//  fetch(`http://localhost:3000/posts/${id}`, {method: 'DELETE'})
//    .then(res => res.json())
//    .then(res => {
//    console.log(res)
//    })
//  btnDel.previousSibling.remove();
//  btnDel.remove();
//  }












