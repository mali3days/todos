window.onload = function () {
    document.body.addEventListener('click', progres, false);
    let container = document.createElement("DIV");
    container.classList.add("container");
    document.body.appendChild(container);

    let title = document.createElement("DIV");
    title.classList.add("header")
    container.appendChild(title);
    let h1 = document.createElement("H1");
    h1.classList.add("main-title");
    h1.innerHTML ="HEADER";
    title.appendChild(h1);


    let form = document.createElement("DIV");
    form.classList.add("form")
    container.appendChild(form);

    let ul = document.createElement("UL");
    ul.classList.add("containerUL")
    form.appendChild(ul);

    let controll = document.createElement("DIV");
    controll.classList.add("footer")
    container.appendChild(controll);

    let input = document.createElement("INPUT");
    input.classList.add('text');
    controll.appendChild(input);

    let button = document.createElement("BUTTON");
    button.classList.add('add');
    button.innerHTML = "ADD";
    button.addEventListener('click', addcard, false);
    controll.appendChild(button);

    let myProgress = document.createElement("DIV");
        myProgress.setAttribute("id", "myProgress");
        container.appendChild(myProgress);
    let myBar = document.createElement("DIV");
        myBar.setAttribute("id", "myBar");
        myBar.innerHTML = "0%";
        myProgress.appendChild(myBar);



    function  addcard() {
        let li = document.createElement("LI");
        li.classList.add("li-list");
        let checkbox =document.createElement("INPUT")
        checkbox.classList.add('checkbox');
        checkbox.setAttribute("type", "checkbox");
        let span = document.createElement('span');
        span.innerText = input.value;
        span.classList.add('toggle_span');
        let inputcard = document.createElement('input');
        inputcard.value = input.value;
        inputcard.classList.add('toggle_input');
        let edit = document.createElement('button');
        edit.innerHTML = 'edit';
        edit.classList.add("Edit");
        edit.addEventListener('click', editer, false);
        let deletes = document.createElement('button');
        deletes.classList.add("delete");
        deletes.innerHTML = 'Delete';
        deletes.addEventListener('click', remove, false);


        li.appendChild(checkbox);
        li.appendChild(inputcard);
        li.appendChild(span);
        li.appendChild(edit);
        li.appendChild(deletes);
        ul.appendChild(li);
        input.value = '';
    }

    function remove() {

        this.parentElement.remove();

    }

    function editer(event) {

        let span = event.target.previousSibling;
        span.classList.toggle("toggle_span_hide");
        let input = event.target.previousSibling.previousSibling;
        input.classList.toggle("toggle_input");
        span.innerText = input.value;
    }

    function progres() {
        let count = 0;
        let checked = 0;
        let elem = document.getElementById("myBar");
        count = document.querySelectorAll('input[type="checkbox"]:checked').length;
        checked = document.querySelectorAll('input[type="checkbox"]').length;
        let percent = Math.round((count / checked) * 100);
        let width = percent;
        if(count == 0 || checked == 0) {
            elem.style.width = 0 + '%';
            elem.innerHTML = '0%';
        }
        else
        {

            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';

        }



    }



}
