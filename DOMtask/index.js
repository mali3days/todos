window.onload = function() {
    let body = document.getElementsByTagName('body')[0];

    let cardPlace = document.createElement('div');
    cardPlace.classList.add('card-place');

    let cardTitle = document.createElement('span');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = 'Purchases';
    cardPlace.appendChild(cardTitle);

    let listItems = document.createElement('ul');
    listItems.classList.add('list-items');
    cardPlace.appendChild(listItems);

    let cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    cardPlace.appendChild(cardFooter);

    let inputPlace = document.createElement('div');
    inputPlace.classList.add('card-input-place');
    cardFooter.appendChild(inputPlace);

    let input = document.createElement('input');
    input.classList.add('card-input');
    input.setAttribute('type', 'text');
    inputPlace.appendChild(input);

    let addBtn = document.createElement('div');
    addBtn.classList.add('btn', 'btn-add');
    inputPlace.appendChild(addBtn);

    let progressBar = document.createElement('div');
    progressBar.classList.add('card-progress-bar');
    progressBar.innerHTML = '0%';
    cardFooter.appendChild(progressBar);

    body.appendChild(cardPlace);

    function addPurchase() {
        if (input.value) {
            let purchaseItem = document.createElement('li');
            let purchaseText = document.createElement('div');
            let purchaseSpan = document.createElement('span');
            let purchaseInput = document.createElement('input');
            purchaseInput.setAttribute('type', 'text');
            purchaseInput.classList.add('hidden');
            purchaseText.classList.add('purchase-text');
            purchaseSpan.innerText = input.value;
            purchaseText.appendChild(purchaseSpan);
            purchaseText.appendChild(purchaseInput);
            purchaseItem.appendChild(purchaseText);
            purchaseItem.classList.add('list-value');

            let checkBox = document.createElement('input');
            checkBox.setAttribute('type', 'checkbox');
            checkBox.classList.add('checkbox');
            purchaseText.insertBefore(checkBox, purchaseText.firstChild);

            let purchaseButtons = document.createElement('div');
            purchaseButtons.classList.add('purchase-btns');
            purchaseItem.appendChild(purchaseButtons);

            let editBtn = document.createElement('div');
            editBtn.classList.add('btn', 'btn-edit');
            purchaseButtons.appendChild(editBtn);

            let rmBtm = document.createElement('div');
            rmBtm.classList.add('btn', 'btn-rm');
            purchaseButtons.appendChild(rmBtm);

            input.value = '';

            listItems.appendChild(purchaseItem);
        }
    }

    addBtn.onclick = addPurchase;

    input.onkeypress = function (e) {
        if(e.code == 'Enter' || e.code == 'NumpadEnter') {
            addPurchase();
        }
    };

    listItems.onclick = function (event) {
        if (event.target.classList.contains('btn-rm')) {
            let tmp = event.target;
            tmp.closest('li').remove();
        } else if (event.target.classList.contains('btn-edit') || event.target.tagName == 'SPAN') {
            let btn = event.target;
            let tmpInput = event.target.parentElement.parentElement.childNodes[0].lastChild;
            tmpInput.classList.toggle('hidden');

            let tmpSpan = tmpInput.previousSibling;
            tmpSpan.classList.toggle('hidden');

            function editPurchase() {
                if(tmpInput.value) {
                    tmpSpan.innerHTML = tmpInput.value;
                    tmpSpan.classList.toggle('hidden');
                    tmpInput.classList.toggle('hidden');
                    tmpInput.value = '';
                } else {
                    tmpSpan.classList.toggle('hidden');
                    tmpInput.classList.toggle('hidden');
                }
            }

            tmpInput.onkeypress = function (e) {
                if (e.code == 'Enter' || e.code == 'NumpadEnter') {
                    editPurchase();
                }
            };

            btn.onclick = function (event) {
                event.stopPropagation();
                editPurchase();
            }
        } else if (event.target.classList.contains('checkbox')) {
            let checks = document.getElementsByClassName('checkbox');
            let sum = 0;
            for (let i = 0; i < checks.length; i++) {
                if (checks[i].checked) {
                    sum += 1;
                }
            }
            progressBar.innerHTML = Math.round((sum/checks.length)*100) + '%';
            progressBar.style.width = Math.round((sum/checks.length)*100) + '%';
        }
    };
};
