import { createNewLi } from './new-li';
import { database } from './database';
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
    console.log(list)
    const listArr = [...list.childNodes]
    console.log(listArr)

    const listCheckbox = listArr.map( item => {
        return item.childNodes[0];
    })
    console.log(listCheckbox)

    const checkedList = listCheckbox.filter( item => item.checked )
    console.log(checkedList)

    const listArrLength = listCheckbox.length;
    console.log(listArrLength)
    
    const checkedListLength = checkedList.length;
    // console.log(list)
    
    const procent = checkedListLength/listArrLength || 0;
    return procent;
    // return checkedListLength/listArrLength + "%";

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
