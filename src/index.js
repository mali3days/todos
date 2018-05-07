import "./styles/main.css"

import { createCard } from "./create-card";
import { addItemToList,renderList,addHandler } from './operations';

(() => {
    createCard();
    renderList();
})()