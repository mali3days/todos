'use strict';

class addNew{
    constructor(){

    }
    init() {

        this.filterBtn = document.createElement('button');
        this.filterBtn.innerHTML = 'last three';
        document.body.appendChild(this.filterBtn);
        this.filterBtn.addEventListener('click', ()=> {
            let start = this.container.childNodes.length - 3;

            this.container.innerHTML = '';
            this.renderLastTree(start);
        });
        this.container = document.createElement('div');
        document.body.appendChild(this.container);


        fetch('http://localhost:3000/posts/')
            .then(response => {
                return response.json();
            })
            .then(response => {

                for (let i = 0 ; i < response.length; i++){
                    this.renderPosts(response[i], response[i].id)
                }
            })
            .catch(alert);
        this.createNew();
    }
    renderLastTree(start){
        fetch(`http://localhost:3000/posts?_start=${start}&_limit=10`)
            .then(response => {

                return response.json();
            }).then(response =>{
                for (let i = 0; i < response.length; i++){
                    let post = {
                        title: response[i].title,
                        author: response[i].author
                    };
                    console.log(response[i])
                    this.renderPosts(post, response.id);
                }
        })

            .catch(alert);
    }
     createNew(){
            this.new = document.createElement('div');
            this.new.classList.add('fixed');


            this.author = document.createElement('input');
            this.author.setAttribute('placeholder', 'author name');

            this.title = document.createElement('input');
            this.title.setAttribute('placeholder', 'title');

            this.btn = document.createElement('button');
            this.btn.innerHTML = 'Send';

            this.new.appendChild(this.author);
            this.new.appendChild(this.title);
            this.new.appendChild(this.btn);
            document.body.appendChild(this.new);

            this.btn.addEventListener('click', ()=>{
                if((!this.author.value)||(!this.title.value)){
                    alert('incorect value')
                }else{
                    let arr = {
                        author: this.author.value,
                        title: this.title.value,
                    };

                    this.postRequest(arr);
                    this.author.value = '';
                    this.title.value = '';
                }

            })
        }

    renderPosts(data, id){
        let card = document.createElement('div');
        card.classList.add('card');
        card.id = id;
        let basket = document.createElement('span');
        basket.classList.add('basket');
        basket.innerHTML = '<i class="far fa-trash-alt"></i>';

        this.container.appendChild(card);
        card.innerHTML = `${data.author}: ${data.title} `;

        card.appendChild(basket);

        basket.addEventListener('click', (e) => {
            let block = e.target.closest('.card'),
                conf = confirm('Are you sure?');
            if(conf){
                this.removeRequest(block)
            }
        });

    }
    postRequest(post){

        fetch('http://localhost:3000/posts/', {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(post)
        })
            .then( (response) => {

                return response.json()
            }).then(response =>{
                this.renderPosts(post, response.id);
                alert('your message sent')

        })

            .catch(alert);
    }
    removeRequest(card){

        fetch(`http://localhost:3000/posts/${card.id}`, {
            method: 'delete',
        })
            .then(() => {
                card.remove()
            })

            .catch(alert);

    }



}
let newCard = new addNew();
newCard.init();