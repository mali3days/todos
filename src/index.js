import "babel-polyfill";
import "./styles/style.css";
import { renderInitialPage } from "./render-initial-page";
import declareHandlers from "./declare-hanlers";
import getDatahandler from './get-handler';
( () => {
    renderInitialPage();
    declareHandlers();
})()