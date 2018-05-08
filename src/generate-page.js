import {
    createElem,
    createElemWithClass
} from "./create-element";
export default () => {
    const wrapper = createElemWithClass("div", "wrapper");
    const list = createElemWithClass("ul", "list");
    const form = createElem({
        tagname: "form",
        classes: "ajax-form",
        attr: [{

            name: "action",
            value: ""
        }]
    })
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })
    const input = createElem({
        tagname: "input",
        classes: "info-input",
        attr: [{
                name: "placeholder",
                value: "enter text"
            },
            {
                name: "type",
                value: "text"
            }
        ]
    })
    const submitButton = createElem({
        tagname: "input",
        classes: "submit-button",
        attr: [{
                name: "value",
                value: "SUBMIT"
            },
            {
                name: "type",
                value: "submit"
            }
        ]
    })
    form.appendChild(input);
    form.appendChild(submitButton);
    wrapper.appendChild(form);
    wrapper.appendChild(list);

    document.body.appendChild(wrapper);
}