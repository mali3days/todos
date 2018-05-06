import { createNewLi } from './new-li';
import { database } from './database';
let index = 0;
export const addItemToList = (item) => {
    const list = document.getElementsByClassName("buy-list")[0];
    const li = createNewLi(item.value.title)
    list.appendChild(li)
}


export const renderList = () => {
    for(let item of database) {
        item ? addItemToList(item) : null
    }
}

export const addHandler = () => {
    const input = document.getElementsByClassName("add-input")[0];
    const title = input.value
    const data = {
        key: index++,
        value: {
            title,
            flag: 1
        }
    }
    database.push(data)
    input.value = "";
    addItemToList(data);

}
