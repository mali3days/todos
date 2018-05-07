import {
    createNewLi
} from './new-li';
import {
    database
} from './database';
let index = 0;
export const addItemToList = (item) => {

    const list = document.getElementsByClassName("buy-list")[0];
    const input = document.getElementsByClassName("add-input")[0];
    const li = createNewLi(input.value);
    list.appendChild(li);
    input.value = "";
}

export const calcSelectProc = () => {
    const list = document.getElementsByClassName("buy-list")[0];
    const listArr = [...list.childNodes]
    const listCheckbox = listArr.map(item => {
        return item.childNodes[0];
    })
    const checkedList = listCheckbox.filter(item => item.checked)
    const listArrLength = listCheckbox.length;
    const checkedListLength = checkedList.length;
    const procent = checkedListLength / listArrLength || 0;
    return procent;
}
export const setProgresssStyle = () => {
    const scale = document.getElementsByClassName("scale-value")[0];
    const procent = calcSelectProc();
    scale.style.width = `${procent*100}%`;
}


export const renderList = () => {
    for (let item of database) {
        item ? addItemToList(item) : null
    }
}

export const showInput = (input, table) => {
    input.value = table.innerText;
    input.style.display = "block";
    input.focus()
    table.style.display = "none";
}
export const hideInput = (input, table) => {
    const value = input.value;
    table.innerText = value;
    input.style.display = "none";
    table.style.display = "block";
}
// export const removeItem = target => {
//     const parent = target
// }

// export const addHandler = () => {
//     const input = document.getElementsByClassName("add-input")[0];
//     const title = input.value
//     const data = {
//         key: index++,
//         value: {
//             title,
//             flag: 1
//         }
//     }
//     database.push(data)
//     input.value = "";
//     addItemToList(data);

// }
