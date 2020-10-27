var output, helloWorld;

class Controller {

    constructor(){
        output = document.getElementById("output");
        helloWorld = "Hello World!";
    }

    showHelloWorld(){
        output.innerHTML = helloWorld;
    }

}

export default new Controller();