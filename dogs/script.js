$( document ).ready(function() {
    $('.get-new-dog').click(function(){getRandomDog()});

    function getRandomDog() {
        $('.get-new-dog').text('Loading..').off('click'); // yep this is stupid method
        $('main').append('<div class="img-wrapper"><div class="loader"></div></div>');
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response =>  response.json() )
            .then(jsonObj => {
                if (jsonObj.status == 'success') {
                    let img_url = jsonObj.message;
                    $('.img-wrapper:last-child').append('<img src="' + img_url + '">').children('.loader').remove();
                    $('.get-new-dog').text('Get random dog').click(function(){getRandomDog()});
                }
            })
    }
});