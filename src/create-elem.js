
export const createElemWithClass = (tag, ...classes) => {
    const elem = document.createElement(tag);
    for (let item of classes) {
        elem.classList.add(item);
    }
    return elem;
}
/* 
param = {
    tagname: .....,
    classes: str,
    text: str,
    attributes: [
        {
            name: type,
            attr: value
        },
        {}
    ]
}
*/
export const createElem = params => {
    const elem = document.createElement(params.tagname);
    elem.className = params.classes || null;
    params.text ? (() => { elem.innerText = params.text })() : null;
    Array.isArray(params.attr) === true ?
        (() => {
            for (let item of attr) {
                let { name, value } = item;
                elem.setAttribute(name, value);
            }
        })()
        : null;
    return elem;
}
