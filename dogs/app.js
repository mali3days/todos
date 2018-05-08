let btnDog = document.getElementById('btnDog');
let dogs = document.querySelector('.dogs');

function renderDog(message){
    let dog = `<div class = 'dog'><img src = '${message}' class = 'dog-image'></div>`;
    dogs.innerHTML += dog;
}

function getDog(){
    disableButton(btnDog);
    renderLoader(true);
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then((res) => {
            if(res.status === 'success'){
                renderLoader(false);
                renderDog(res.message);
            }
            // задержка для имитации длительного ответа
            setTimeout(activateButton, 1000, btnDog);
        });
}

function renderLoader(loading){
    if(loading) {
        let loader = `<div class = 'dog loader'><i class="fas fa-spinner"></i></div>`;
        console.log(loader);
        dogs.innerHTML += loader;
    }
    else{
        let loader = document.querySelector('.loader');
        dogs.removeChild(loader);
    }
}

function disableButton(button){
    button.classList.toggle('disabled');
    button.removeEventListener('click', getDog);
}

function activateButton(button){
    button.classList.toggle('disabled');
    button.addEventListener('click', getDog);
}

btnDog.addEventListener('click', getDog);