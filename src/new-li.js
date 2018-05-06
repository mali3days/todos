import { createElem,createElemWithClass } from './create-elem';
export const createNewLi = (value) => {
    const newLi = document.createDocumentFragment();

    // const li
    const li = createElem({
        tagname: "div",
        classes: "list-group-item",
        // text: value
    })
    const table = createElem({
        tagname: "div",
        classes: "table",
        text: value
    })

    // const li = document.createElement("li");
    // const table = document.createElement("div");
    // table.innerText = value;
    // table.className = "table";
    
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "text");
    const edit = document.createElement("i");
    edit.className = "fas fa-edit";
    const remove = document.createElement("i");
    remove.className = "fas fa-times";

    remove.addEventListener("click", e =>{
        e.preventDefault();
        let parent = e.target.parentElement;
        const removeElem = elem => {
            elem.localName !== "li" ? 
            removeElem(elem.parentElement) :
            elem.remove()
        }
        removeElem(parent);    
    })

    li.appendChild(remove);
    li.appendChild(edit);
    li.appendChild(table);
    
    return newLi.appendChild(li)
}