import getDatahandler from './get-handler';

export default () => {
    const button = document.getElementById("add-button");
    button.addEventListener("click", e => {
        e.preventDefault();
        getDatahandler();
    })
}