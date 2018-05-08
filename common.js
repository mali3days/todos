class DOMINIT{
    constructor(){
        this.container = document.createElement('div');
        this.plus = document.createElement('div');
    }
    init(){

        this.container.classList.add('container');
        this.container.classList.add('d-flex');
        this.container.classList.add('justify-content-center');

        document.body.insertAdjacentElement("afterbegin", this.container);

        this.addCard();


    }
    addCard(){
        this.plus.innerHTML = '<i class="fas fa-plus-circle"></i>'
        this.plus.classList.add('plus');

        this.container.appendChild(this.plus);
        this.plus.addEventListener('click', () => {

            this.plus.classList.add('d-none');
            let newCard = new createCard();
            newCard.init();
        })
    }
}

class createCard{
    constructor(){
        this.container = document.querySelector('.container')
    }

    init(){
        this.checkedCounter = 0;

        this.card = document.createElement('div');
        this.card.classList.add('col-6');
        this.card.classList.add('card');

        let header = document.createElement('div');
        header.innerHTML = '<div class="card-header d-flex justify-content-between align-items-center"><h2 class="card-title text-for-edit"> ...</h2> <input type="text" class="edit-window d-none"><span class="edit-card-name"> <i class="fas fa-pencil-alt"></i> </span></div>'
        this.card.appendChild(header)
        let body = document.createElement('div');
        body.innerHTML = '<div class="card-body"> <ul class="to-do-list"></ul> ' +
            '<div class="block-extend-item-list d-flex justify-content-between align-items-center"><input class="new-items" placeholder="put here additions"><span class="add-new-item"><i class="fas fa-plus"></i></span></div> </div>'
        this.card.appendChild(body);
        let footer = document.createElement('div');
        footer.innerHTML = '<div class="card-footer d-flex align-items-center"> <div class="progress"> <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> </div> ' +
            '<span class="percent">0%</span></div>'
        this.card.appendChild(footer);

        this.container.appendChild(this.card);

        this.editName(this.card, '.edit-card-name', '.text-for-edit', '.edit-window');
        this.addNewTask(this.card);

    }

    editName(parent, classBtn, textClass, inputClass){
        let clickAmount = 0;

        this.editBtn = parent.querySelector(classBtn);

        this.editBtn.addEventListener('click', (e) => {

            if (e.target.closest('.card-header')){
                this.parent = e.target.closest('.card-header');
            }else{
                this.parent = e.target.closest('li');
            }

            this.input = this.parent.querySelector(inputClass);
            this.text = this.parent.querySelector(textClass);
            this.btn = this.parent.querySelector(classBtn);

            if (!(clickAmount % 2)){
                this.input.value = this.text.textContent;
                this.btn.innerHTML = '<i class="fas fa-check"></i>'
            }else{
                this.text.innerText = this.input.value;
                this.btn.innerHTML = '<i class="fas fa-pencil-alt"></i>'
            }

            this.text.classList.toggle('d-none');
            this.input.classList.toggle('d-none');
            clickAmount++;
        })

    }
    addNewTask(card){
        this.parentBlock = card.querySelector('.block-extend-item-list');
        this.addBtn = this.parentBlock.querySelector('.add-new-item');
        this.addBtn.addEventListener('click', () => {
            this.inputContent = this.parentBlock.querySelector('input').value;
            this.parentBlock.querySelector('input').value = '';

            this.buildLI(card, this.inputContent);
        })

    }
    buildLI(card, inputContent){
        this.list = card.querySelector('.to-do-list');
        let newLi = document.createElement('li');
        newLi.classList.add('list-item');
        newLi.innerHTML = `<input type="checkbox" class="checkbox"> <input type="text" class="edit-li-wind d-none"> <span class="content"> ${inputContent} </span> <span class="edit-item"><i class="fas fa-pencil-alt"></i></span> <span class="trash"><i class="fas fa-trash-alt"></i></span> `;
        this.list.appendChild(newLi);
        this.liListeners(newLi)

    }
    liListeners(li){
        this.editName(li, '.edit-item', '.content', '.edit-li-wind');
        this.removeLi(li);
        this.checked(li);


    }
    removeLi(li){
        this.removeBtn = li.querySelector('.trash');

        this.removeBtn.addEventListener('click', (e) => {
            let conf = confirm('Are you sure?');
            let basket = e.target;

            if (conf){
                if(basket.closest('li').querySelector('.checkbox').checked) {
                    this.checkedCounter--;
                }
                li.remove();
            }
            this.progress(this.card);
        });

    }
    checked(li){

        this.checkbox = li.querySelector('.checkbox');
        this.progress(li.closest('.card'));
        this.checkbox.addEventListener('change', (e) => {

            if( e.target.checked ){
                this.checkedCounter++;
            }else{
                this.checkedCounter--;
            }
            this.progress(e.target.closest('.card'))
        })
    }
    progress(card){
        this.ul = card.querySelector('.to-do-list');
        this.progressBar = card.querySelector('.progress-bar');
        this.percent = card.querySelector('.percent');

        let liAmount = this.ul.childElementCount,

            countedPercent = parseFloat(((this.checkedCounter/liAmount) * 100).toFixed(1));
        
        if (!countedPercent){
            countedPercent = 0;
        }
        this.percent.innerHTML = `${countedPercent}%`;
        this.progressBar.style.width = `${countedPercent}%`
    }
}

;(function(){

    let init = new DOMINIT();
    init.init();

    let cards = new createCard();
    cards.init();

}())
