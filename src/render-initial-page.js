import {
    createElem,
    createElemWithClass
} from './create-element';
export const renderInitialPage = () => {
    const fragment = document.createDocumentFragment();
    const wrapper = createElem({
        tagname: "div",
        classes: "wrapper"
    });
    const grid = createElem({
        tagname: "div",
        attr: [
            {
                name: "class",
                value: "grid"
            },
            {
                name: "id",
                value: "grid"
            }
        ]
    })
    const form = createElem({
        tagname: "div",
        classes: "form"
    })
    const button = createElem({
        tagname: "input",
        attr: [{
                name: "id",
                value: "add-button"
            },
            {
                name: "type",
                value: "button"
            },
            {
                name: "value",
                value: "GET RANDOM DOG"
            }
        ]
    })
    // const galleryItem1 = createElem({
    //     tagname: "div",
    //     classes: "grid-item",
    //     text: "ITEM1"
    // })
    // const galleryItem2 = createElem({
    //     tagname: "div",
    //     classes: "grid-item",
    //     text: "ITEM2"
    // })
    // grid.appendChild(galleryItem1);
    // grid.appendChild(galleryItem2);
    const body = document.body;
    form.appendChild(button);
    wrapper.appendChild(form);
    wrapper.appendChild(grid);
    fragment.appendChild(wrapper);
    body.appendChild(fragment)
}
