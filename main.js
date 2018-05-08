
class Post {
    constructor () {
        this.button = document.getElementById('submit');
        this.button.addEventListener("click", this.addPost.bind(this));
        this.render();
    }
    render() {

        fetch('http://localhost:3000/posts/')
            .then((res) => res.json())
            .then((data) => {
                    for(let i = 0; i < data.length; i++) {
                        this.delete = document.createElement("button");
                        this.delete.innerHTML="delete";
                        this.delete.addEventListener("click", this.deletePost.bind(this));
                        this.ul = document.createElement("ul");
                        this.id = document.createElement("li");
                        this.title = document.createElement("li");
                        this.body = document.createElement("li");
                        this.id.innerHTML = data[i].id;
                        this.title.innerHTML = data[i].title;
                        this.body.innerHTML = data[i].body;
                        this.ul.appendChild(this.id);
                        this.ul.appendChild(this.title);
                        this.ul.appendChild(this.body);

                        this.div = document.createElement("div");
                        this.div.appendChild(this.ul);
                        this.div.appendChild(this.delete);
                        document.getElementById("output").appendChild(this.div);
                    }

            });

    }
    addPost(e) {
        e.preventDefault();
        this.textareavalue = document.getElementById('body').value;
        this.inputvalue = document.getElementById('title').value;
                    fetch('http://localhost:3000/posts/', {
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        },
                        body:JSON.stringify({title:this.textareavalue, body:this.inputvalue})
                    })

                        .then((res) => res.json())
                        .then((data) => {

                                this.delete = document.createElement("button");
                                this.delete.innerHTML="delete";
                                this.delete.addEventListener("click", this.deletePost.bind(this));
                                this.ul = document.createElement("ul");
                                this.id = document.createElement("li");
                                this.title = document.createElement("li");
                                this.body = document.createElement("li");
                                this.id.innerHTML = data.id;
                                this.title.innerHTML = data.title;
                                this.body.innerHTML = data.body;
                                this.ul.appendChild(this.id);
                                this.ul.appendChild(this.title);
                                this.ul.appendChild(this.body);

                                this.div = document.createElement("div");
                                this.div.appendChild(this.ul);
                                this.div.appendChild(this.delete);
                                document.getElementById("output").appendChild(this.div);
                        });

    }

    deletePost(e){
        let id = e.target.previousSibling.childNodes[0].innerHTML;
                fetch('http://localhost:3000/posts/' + id, {
                method: 'delete'
            })
                .then(res => res.json())

        e.target.parentElement.remove();
    }

}
let post = new Post();