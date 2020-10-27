var output, helloWorld;

class Controller {

    constructor(){
        output = document.getElementById("output");
        helloWorld = "Hello World!";
    }

    showHelloWorld(){
        console.log("test");
        output.innerHTML = helloWorld;
    }

}

export default new Controller();