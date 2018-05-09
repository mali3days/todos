import { createElem } from './create-element';

export const createGridItem = url => {
    const img = createElem({
        tagname: "img",
        classes: "item-img",
        attr: [
            {
                name: "src",
                value: url
            },
            {
                name: "alt",
                value: "GRID ITEM IMAGE"
            }
        ]
    })

    const gridItem = createElem({
        tagname: "div",
        classes: "grid-item sizer",
        
    })
    gridItem.appendChild(img);
    return gridItem;
}