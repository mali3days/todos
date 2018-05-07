import {
    setProgresssStyle,
    hideOfInput
} from './operations'
import {
    createElem,
    createElemWithClass
} from './create-elem';
export const createNewLi = (value) => {
    const newLi = document.createDocumentFragment();
    const li = createElem({
        tagname: "li",
        classes: "list-group-item",
    })
    const table = createElem({
        tagname: "div",
        classes: "table",
        text: value
    })
    const checkbox = createElem({
        tagname: "input",
        classes: "check-button",
        attr: [{
            name: "type",
            value: "checkbox"
        }]
    })
    const toggleDiv = createElem({
        tagname: "div",
        classes: "toggle-div"
    })
    const hideInput = createElem({
        tagname: "input",
        classes: "hide-input",
        attr: [{
            name: "type",
            value: "text"
        }],
        styles: [{
            name: "display",
            value: "none"
        }]
        // attr: []
    })
    hideInput.addEventListener("blur", e => {
        const target = e.target;
        const parent = target.parentElement;
        const input = parent.querySelector(".hide-input");
        const table = parent.querySelector(".table");
        input.value !== "" ? hideOfInput(input,table) : null;
    })
    toggleDiv.appendChild(table);
    toggleDiv.appendChild(hideInput);
    checkbox.addEventListener("click", e => {
        setProgresssStyle()
    })

    const edit = document.createElement("i");
    edit.className = "fas fa-edit";
    const remove = document.createElement("i");
    remove.className = "fas fa-times";

    remove.addEventListener("click", e => {
        // e.preventDefault();
        let parent = e.target.parentElement;
        const removeElem = elem => {
            elem.localName !== "li" ?
                removeElem(elem.parentElement) :
                elem.remove()
        }
        confirm("are you sure ?") === true ?
            removeElem(parent) :
            null;
        setProgresssStyle();
    })
    li.appendChild(checkbox);
    li.appendChild(remove);
    li.appendChild(edit);
    li.appendChild(toggleDiv);

    return newLi.appendChild(li)
}