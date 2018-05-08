import getData from "./get-data";
import {
    addUserToList
} from './add-user';
import {
    createElem
} from "./create-element";



export default async list => {
    const data = await getData("http://localhost:3000/users");
    for (let item of data) {
        addUserToList(item,list);
    }
    console.log(data)
}