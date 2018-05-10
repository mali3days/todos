class Post {
    constructor(){
        this.form = document.getElementById('form');
        this.titleInput = document.getElementById('title');
        this.textInput = document.getElementById('text');
        this.button = document.getElementById('submit');
        this.button.addEventListener('click', this.addPost.bind(this));
        this.container = document.getElementById('container')
    }
    render(){
        fetch('http://localhost:3000/posts')
        .then((response) => response.json())
        .then(responseJSON => {
            for(let i = 0; i < responseJSON.length; i++) {
                let div = this.createElem('div', 'post', '');
                div.setAttribute('data-id', responseJSON[i].id);
                let h3 = this.createElem('h3', 'title', responseJSON[i].title);
                let p = this.createElem('p', 'text', responseJSON[i].text);
                let del = this.createElem('button', 'del', 'Delete');
                del.addEventListener('click', this.deletePost);
                div.appendChild(h3);
                div.appendChild(p);
                div.appendChild(del);
                this.container.appendChild(div);
            }
        })
    }
    addPost(){
        this.titleInputValue = this.titleInput.value;
        this.textInputValue = this.textInput.value;
        let config = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body:JSON.stringify({title: this.titleInputValue, text: this.textInputValue})
        }
        fetch('http://localhost:3000/posts', config)
        .then((response) => response.json())
        .then((responseJSON) => {
            let div = this.createElem('div', 'post', '');
            div.setAttribute('data-id', responseJSON.id);
            let h3 = this.createElem('h3', 'title', responseJSON.title);
            let p = this.createElem('p', 'text', responseJSON.text);
            let del = this.createElem('button', 'del', 'Delete');
            del.addEventListener('click', this.deletePost());
            div.appendChild(h3);
            div.appendChild(p);
            div.appendChild(del);
            this.container.appendChild(div);
        })
    }
    deletePost(){
        let idForDel = this.parentNode.getAttribute('data-id');
        let delConfig = {
            method:'DELETE' 
        }
        fetch('http://localhost:3000/posts/'+idForDel, delConfig)
        .then((response) => response.json());
        this.parentNode.remove();
    }
    createElem(elem, clas, inner) {
        let element = document.createElement(elem);
        element.classList.add(clas);
        element.innerHTML = inner;
        return element; 
    }
}
let post = new Post();
post.render();