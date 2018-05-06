import {
    addItemToList,
    renderList,
    addHandler,
    calcSelectProc
} from './operations';
import {
    createElemWithClass, createElem
} from './create-elem';

export const createCard = () => {
    //create wrap-div

    const card = document.createDocumentFragment();
    const wrapper = createElemWithClass('div', 'wrapper');
    const title = createElemWithClass('h1', 'title');
    title.innerHTML = "ПОКУПКИ"
    const buyList = document.createElement("ul");
    buyList.className = "buy-list";

    const inputField = createElemWithClass('div', 'input-field');
    // const input = createElemWithClass('input', 'add-input');
    const input = createElem({
        tagname: "input",
        classes: "add-input",
        attr: [
            {
                name: "placeholder",
                value: "Enter text"
            }
        ]
    })
    const button = createElemWithClass('i', 'fas', 'fa-plus');
    wrapper.addEventListener("click", e => {
        const target = e.target;
        console.log(target)
        target.className.indexOf("fa-plus") >=0 ? (()=>{
            addItemToList(target)
        })() : null
    });

    wrapper.addEventListener("keydown", e => {
        const target = e.target;
        console.log(e.keyCode)
        target.className === "add-input" 
        && e.keyCode === 13 
        && target.value !== ""
        ? (() => {
            addItemToList(target);
            target.value = "";
        })() 
        : null;
    })
    inputField.appendChild(input);
    inputField.appendChild(button);
    wrapper.appendChild(title);
    wrapper.appendChild(inputField);
    wrapper.appendChild(buyList);

    const test = createElem({
        tagname: "button",
        classes: "testbtn",
        text: "test"
    })

    test.addEventListener("click", e => {
        (() => {
            const scale = document.getElementsByClassName("scale-value")[0];
            const procent = calcSelectProc();
            scale.style.width = `${procent*100}%`
        })()
    })

    // CREATE SCALE
    const scaleDiv = createElemWithClass("div","scale-div");
    const scale = createElemWithClass("div","scale");
    const scaleValue = createElemWithClass("div","scale-value");
    scale.appendChild(scaleValue);
    scaleDiv.appendChild(scale);
    wrapper.appendChild(scaleDiv);
    wrapper.appendChild(test)
    card.appendChild(wrapper);




    document.body.appendChild(card);

}