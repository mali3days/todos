export const createNewLi = (value) => {
    const newLi = document.createDocumentFragment();
    const li = document.createElement("li");
    const table = document.createElement("div");
    table.innerText = value;
    
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "text");
    const edit = document.createElement("i");
    edit.className = "fas fa-edit";
    const remove = document.createElement("i");
    remove.className = "fas fa-times";
    remove.addEventListener("click", e =>{
        let parent = e.target.parentElement
        console.log(parent)
    })

    li.appendChild(remove);
    li.appendChild(edit);
    li.appendChild(table);
    
    return newLi.appendChild(li)
}