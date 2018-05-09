var btnDog;

document.addEventListener('DOMContentLoaded', function() {
	btnDog = document.querySelector('.btn-dog');
	btnDog.addEventListener('click', function() {
		getRandomDog();
	}); // { once: true }
});

function getRandomDog() {
	fetchRundomDog();
}

function fetchRundomDog() {
	fetch('https://dog.ceo/api/breeds/image/random')
		.then(function(response){
			if (response.status != 200) return;

			response.json().then((response) => {
				var i = new Image();
				i.onload = function(){
					renderRundomDogs(response.message);
					toggleBtnStatus();
					renderLoader();
				}
				i.src = response.message;
			})
		})
		.catch(() => alert('Error!'));

	toggleBtnStatus(true);
	renderLoader(true);
}

function renderRundomDogs(imageURL) {
	var content = document.querySelector('.content');

	content.innerHTML += `<div class="dog-wrp"><img class="dog" alt="${imageURL}" src="${imageURL}"></div>`;

}

function renderLoader(loading) {
	console.log(loading);
	var content = document.querySelector('.content');
	var loader = document.querySelector('.loader-wrp');
	var loaderElem = `<div class="dog dog-wrp loader-wrp">
        <i class="fa fa-circle-o-notch fa-spin loader-custom" style="font-size:24px"></i>
    </div>`;

	if (loading) {
		content.innerHTML += loaderElem;
	} else {
		content.removeChild(loader);
	}
	content.scrollTop = content.scrollHeight;
}

function toggleBtnStatus(loading) {
	if (loading) {
		btnDog.innerHTML = 'Loading...';
		btnDog.disabled = true;
	} else {
		btnDog.innerHTML = 'Get random dog again';
		btnDog.disabled = false;
	}
}
