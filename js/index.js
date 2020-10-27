import View from "./View.js";
import Controller from "./Controller.js";

function init(){
    View.initListener();

    View.addEventListener("onButtonClicked", (event) => Controller.showHelloWorld(event.data));

}

init();