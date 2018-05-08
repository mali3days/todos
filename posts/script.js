$( document ).ready(function() {
    //very bad code..
    let new_post_input_name = $('.new-post-name')[0];
    let new_post_input_url = $('.new-post-img-url')[0];
    let new_post_textarea = $('.new-post-main-text')[0];

    $('button').click(function(){addPost()});

    fetch('http://localhost:3000/posts/')
        .then(function(response){
            return response.json();
        }).then(function(response) {
            setPost(response)}
    );

    function setPost(arr) {
        for (let i = 0; i < arr.length; i++) {
            let post_id = arr[i]["id"];
            let news_title = arr[i]["newsTitle"];
            let news_img = arr[i]["newsImg"];
            let news_text = arr[i]["newstext"];
            let post_template = `<div id="${post_id}" class="post"><div class="remove">X</div><h2>${news_title}</h2><img src="${news_img}"><p>${news_text}</p>`;

            $(post_template).appendTo('main');

            $('#' + post_id + ' .remove').click(removePost.bind(this));
        }
    }

    function removePost(e){
        let post_id = $(e.target).parent().attr('id');
        fetch('http://localhost:3000/posts/' + post_id, {
            method: 'DELETE'
        }).then(function(response) {
            if (response.status === 200 && confirm('You are realy want to delete this post?')) {
                $('#' + post_id).remove();
            }
        });
    }

    function addPost() {
        let new_post_obj= {
            "newsTitle": $(new_post_input_name).val(),
            "newsImg": $(new_post_input_url).val(),
            "newstext": $(new_post_textarea).val()
        };

        let data = JSON.stringify( new_post_obj );

        fetch('http://localhost:3000/posts/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }).then((response) => {return response.json();})
            .then(function(response){
                let arr = [response];
                setPost(arr);
            }
        );
    }
});