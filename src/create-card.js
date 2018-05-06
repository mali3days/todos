import { addItemToList,renderList,addHandler } from './additem';
import { createElemWithClass } from './create-elem';

export const createCard = () => {
//create wrap-div

    const card = document.createDocumentFragment();
    const wrapper = createElemWithClass('div','wrapper');
    const title = createElemWithClass('h1','title');
    title.innerHTML = "ПОКУПКИ"
    const buyList = document.createElement("ul");
    buyList.className = "buy-list";

    const inputField = createElemWithClass('div','input-field');
    const input = createElemWithClass('input','add-input');
    const button = createElemWithClass('i','fas','fa-plus');

    button.addEventListener("click",addHandler);
    inputField.appendChild(input);
    inputField.appendChild(button);


//add elements
    wrapper.appendChild(title);
    wrapper.appendChild(buyList);
    wrapper.appendChild(inputField);
    card.appendChild(wrapper);

    document.body.appendChild(card);

}