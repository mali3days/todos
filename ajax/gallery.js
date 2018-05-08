function createGallery() {
    let body = document.body;

    let head = document.createElement('div');
    head.classList.add('head');

    let title = document.createElement('h1');
    title.innerText = 'Gallery';
    head.appendChild(title);

    let button = document.createElement('button');
    button.innerText = 'Give me new image';
    head.appendChild(button);

    body.appendChild(head);

    let galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery');
    body.appendChild(galleryContainer);

    button.addEventListener('click', addImage);

    function addImage() {
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-wrap');
        imgContainer.innerHTML = '<i class="fas fa-spinner fa-spin loader-custom"></i>';
        galleryContainer.appendChild(imgContainer);

        button.disabled = true;
        button.innerText = 'Loading image...';


        fetch('https://dog.ceo/api/breeds/image/random', {method: 'GET'})
            .then((response) => {
                return response.json();
            })
            .then((image) => {
                imgContainer.innerHTML = '';
                let img = document.createElement('img');
                img.setAttribute('src', image.message);
                imgContainer.appendChild(img);
                button.disabled = false;
                button.innerText = 'Give me new image';
            })
            .catch((e) => console.error(e));

        window.scrollTo(0, 99999999);
    }
}

window.addEventListener('load', createGallery);