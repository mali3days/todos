import { addItemToList,renderList,addHandler } from './additem';

export const createCard = () => {
//create wrap-div

    const card = document.createDocumentFragment();
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
//create title
    const title = document.createElement("h1");
    title.className = "title";
    title.innerHTML = "ПОКУПКИ"

//create list
    const buyList = document.createElement("ul");
    buyList.className = "buy-list";

//create input field
    const inputField = document.createElement("div");
    inputField.className = "input-field";
    const input = document.createElement("input");
    input.className = "add-input"
    const button = document.createElement("i");

    button.addEventListener("click",addHandler);
    button.className = "fas fa-plus"
    inputField.appendChild(input);
    inputField.appendChild(button);


//add elements
    wrapper.appendChild(title);
    wrapper.appendChild(buyList);
    wrapper.appendChild(inputField);
    card.appendChild(wrapper);

// add wrap to body
    document.body.appendChild(card);

}