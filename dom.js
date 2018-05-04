

/*var track = document.createElement('div');
track.className = 'track'


Для создание текста нужно воспользоваться методом createTextNode

var text = document.createTextNode('Ваша любимая песня');


var div = document.createElement('div');
div.className = "head-title radius";
div.innerHTML = "<strong>Ура!</strong> Вы прочитали это важное сообщение.";

var parentElem = document.body.


checkbox.classList.add('checkbox');
checkbox.setAttribute("type", "checkbox");

*/

    let newForm = document.createElement('form');
    newForm.className = "goods radius";

    let divHead = document.createElement('div');
    divHead.className = "head-title radius";
    newForm.appendChild(divHead);

    let pTitle = document.createElement('p');
    //pTitle.className = "head-title radius";
    pTitle.textContent = 'text';
    divHead.appendChild(pTitle);

    let divGoods = document.createElement('div');
    divGoods.className = "goods-conteiner";
    newForm.appendChild(divGoods);

    let ul = document.createElement('ul');
    ul.className = "container block-margin listStyle";
    divGoods.appendChild(ul);

    let divTarget = document.createElement('div');
    divTarget.className = "target-goods container radius";
    newForm.appendChild(divTarget);

    let text = document.createElement('textarea');
    divTarget.appendChild(text);

    let inputSubmit = document.createElement('input');
    inputSubmit.setAttribute("type", "submit");
    divTarget.appendChild(inputSubmit);

    let divFooter = document.createElement('div');
    divFooter.className = "footer";
    newForm.appendChild(divFooter);

    let divContainer = document.createElement('div');
    divContainer.className = "prog container radius";
    divFooter.appendChild(divContainer);


    let divProgress = document.createElement('div');
    divProgress.className = "color-progress";
    divContainer.appendChild(divProgress);

    let progress = document.createElement('progress');
    divProgress.appendChild(progress);

    let divPercentages = document.createElement('div');
    divPercentages.className = "percentages";
    divContainer.appendChild(divPercentages);

    let pPercentages = document.createElement('p');
    pPercentages.className = "percentages";
    pPercentages.textContent = '50%';
    divPercentages.appendChild(pPercentages);

function  addForm() {


    let li = document.createElement("LI");
    li.className = '';


}


    document.body.appendChild(newForm);



