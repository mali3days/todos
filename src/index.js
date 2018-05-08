import "babel-polyfill";
import fillList from "./fill-list";
import postRequest from './post-request';
import {
    getFormData
} from './get-data-form';
import generatePage from "./generate-page";

import removeData from './remove-user';
(() => {
    generatePage();
    const list = document.getElementsByClassName("list")[0];
    fillList(list);
    // const form = document.getElementsByClassName("ajax-form")[0];
    const wrapper = document.getElementsByClassName("wrapper")[0];
    wrapper.addEventListener("click", (e) => {
        const target = e.target;
        target.className === "submit-button" ? (() => {
            const data = getFormData();
            data !== null ? postRequest(data) : null;
        })() : null;

        target.className === "list-item" 
        ? (() => {
            removeData(target)
        })() 
        : null;
    })



})()



// console.log(3)