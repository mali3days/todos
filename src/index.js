import "./styles/main.css"

import { createCard } from "./create-card";
import { handler } from "./hanler";
import { addItemToList,renderList,addHandler } from './additem';

(() => {
    createCard();
    renderList();
})()