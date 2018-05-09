import getData from "./get-data";
import addItemToList from './add-item';

export default async () => {
    const data = await getData("https://dog.ceo/api/breeds/image/random");
    const {
        status,
        message
    } = await data;
    // status === "succes" ?  
    ( () => {
        const list = document.querySelector(".grid");
        addItemToList(message,list);
    })()
    // : null;





}