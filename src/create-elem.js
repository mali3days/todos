export const createElemWithClass = (tag, ...classes) => {
    const elem = document.createElement(tag);
    for (let item of classes) {
        elem.classList.add(item);
    }
    return elem;
}

export const createElem = params => {
    const elem = document.createElement(params.tagname);
    elem.className = params.classes || null;
    params.text ? (() => { elem.innerText = params.text })() : null;
    Array.isArray(params.attr) === true ?
        (() => {
            for (let item of params.attr) {
                let { name, value } = item;
                elem.setAttribute(name, value);
            }
            // console.log("arr is true")
        })()
        : null;
    return elem;
}
