import {
    createElem
} from "./create-element";

export const addUserToList = (data, list) => {
    const input = document.getElementsByClassName("info-input")[0];
    const {
        name,
        id
    } = data;
    const li = createElem({
        tagname: "li",
        classes: "list-item",
        text: name,
        attr: [
            {
                name: "data-id",
                value: id
            }
        ]
    })
    const span = createElem({
        tagname: "span",
        classes: "item-id",
        text: id
    })
    span.style.color = "red";
    li.appendChild(span);
    list.appendChild(li);
    input.value = ""
}