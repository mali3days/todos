class Gallery {
    constructor() {
        this.render();
    }

    render() {
        this.controldiv = document.createElement("div");
        this.galleryldiv = document.createElement("div");
        this.galleryldiv.classList.add("gallery");
        this.tittle = document.createElement("h1");
        this.tittle.innerText = "dogs";
        this.button = document.createElement("button");
        this.button.innerHTML= "Create dogs";
        this.button.addEventListener('click', this.addImg.bind(this));

        document.body.appendChild(this.controldiv);
        document.body.appendChild(this.galleryldiv);
        this.controldiv.appendChild(this.tittle);
        this.controldiv.appendChild(this.button);


    }
    addImg() {
        this.imgwrap = document.createElement("div");
        this.imgwrap.classList.add("wrapper");
        this.imgwrap.innerHTML = '<i class="fas fa-spinner"></i>'
        this.galleryldiv.appendChild(this.imgwrap);
        this.button.disabled = true;
        fetch('https://dog.ceo/api/breeds/image/random', {method: 'GET'})
            .then((res) => res.json())
            .then((date) => {
                this.imgwrap.innerHTML = ' ';
                this.img = document.createElement('img');
                this.img.setAttribute("src", date.message);
                this.imgwrap.appendChild(this.img);
                this.button.disabled = false;
            });

    }

}
let gallery = new Gallery();