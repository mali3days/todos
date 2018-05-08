document.addEventListener('DOMContentLoaded', function(){
    var task_count = 0;
    let div = document.createElement('div'); // add element
    let add_new_card = document.createElement('div');
    add_new_card.className = 'add-new-card';
    div.className = 'todo-list-wrapper'; // add class for element
    div.innerHTML = '<div class="todo-header custom"><h1 class="name">TODO-list name</h1><input class="hidden name-changer" type="text"><div class="edit edit-main-name"><i class="fas fa-pencil-alt"></i></div></div><div class="todo-main"><ul></ul><div class="add-new-task"><input type="text" /><a href="#" class="add-task"><i class="fas fa-check"></i></a></div></div><div class="todo-footer"><div class="progress-bar"><div class="bar-status"></div></div><div class="bar-percent"><span><span>%</span></span></div></div>'; //add inner html
    document.body.appendChild(div);
    document.body.appendChild(add_new_card);// appeand create element

    document.querySelector('.edit-main-name').addEventListener('click', function(){
        changeCardName(this);
    });

    document.querySelector('.add-task').addEventListener('click', function(){
        newTask(this);
    });

    document.querySelector('.add-new-card').addEventListener('click', function(){
        addNewCard();
    });

    function changeCardName(btn_change) {
        //TODO: focus on input
        let status = true;
        let btn_parrent = btn_change.parentElement;
        let btn_change_svg = btn_change.querySelector('svg');
        let curent_el_name = btn_parrent.querySelector('.name').textContent;
        let curent_input_name = btn_parrent.querySelector('.name-changer').value;
        let card_input = btn_parrent.querySelector('.name-changer');
        let card_el = btn_parrent.querySelector('.name');

        for (let i = 0; i < btn_parrent.classList.length; i++) {
            if (btn_parrent.classList[i] === 'editable') status = false;
        }

        if (status) {
            btn_change_svg.classList.remove('fa-pencil-alt');
            btn_change_svg.classList.add('fa-check');
            card_input.value = curent_el_name;

            btn_parrent.classList.add('editable');
        } else {
            btn_change_svg.classList.add('fa-pencil-alt');
            btn_change_svg.classList.remove('fa-check');
            card_el.textContent = curent_input_name;

            btn_parrent.classList.remove('editable');
        }
    }

    function newTask(new_task_btn) {
        let new_task_block = new_task_btn.parentElement;
        let new_task_input = new_task_block.querySelector('input');
        let new_task_name = new_task_input.value;

        if (new_task_name !== '') {
            task_count += 1;
            let input_li_template = '<li class="task task-'+ task_count + '"><span class="cheker fa-layers fa-lg"><i class="far fa-square fa-lg"></i><i class="fas fa-check fa-sm"></i></span><span class="name">' + new_task_name + '</span><input class="hidden name-changer" type="text" /><div class="edit"><i class="fas fa-pencil-alt"></i></div><div class="remove-task"><i class="far fa-trash-alt"></i></div></li>';
            let main_ul = new_task_block.parentElement.querySelector('ul');

            main_ul.innerHTML += input_li_template;

            setlistenerForBtn();
            addListenerRemove();
            addListenerCheker();

            new_task_input.value = '';
        }
    }

    function setlistenerForBtn() {
        let li_el = document.querySelectorAll('.task');
        li_el.forEach(function(item) {
            item.querySelector('.edit').addEventListener('click', function(){
                changeCardName(this);
            });
        })
    }

    function addListenerRemove() {
        let li_el = document.querySelectorAll('.task');
        li_el.forEach(function(item) {
            item.querySelector('.remove-task').addEventListener('click', function(){
                removeTask(this);
            });
        })
    }

    function addListenerCheker() {
        let li_el = document.querySelectorAll('.task');
        li_el.forEach(function(item) {
            item.querySelector('.cheker').addEventListener('click', function(){
                checkTask(this);
            });
        })
    }

     function removeTask(remove_btn) {
        if ( confirm('Do you want to delete this task?') ) {
            let removed_li = remove_btn.parentElement;
            let removed_parrent_ul = remove_btn.parentElement.parentElement;
            removed_parrent_ul.removeChild(removed_li);
        }
     }

    function addNewCard() {
        //TODO check event leastener for new todo
        let div = document.createElement('div'); // add element
        //let add_new_card = document.createElement('div');
        div.className = 'todo-list-wrapper'; // add class for element
        div.innerHTML = '<div class="todo-header custom"><h1 class="name">TODO-list name</h1><input class="hidden name-changer" type="text"><div class="edit edit-main-name"><i class="fas fa-pencil-alt"></i></div></div><div class="todo-main"><ul></ul><div class="add-new-task"><input type="text" /><a href="#" class="add-task"><i class="fas fa-check"></i></a></div></div><div class="todo-footer"><div class="progress-bar"><div class="bar-status"></div></div><div class="bar-percent"><span><span>%</span></span></div></div>'; //add inner html
        document.body.appendChild(div);
    }

    //TODO: check if cheker has class cheked
    function checkTask(cheker) {
          cheker.classList.add('cheked');
          cheker.parentElement.classList.add('done');
    }

    //TODO: progresbas
    //Todo: function for remove card
});