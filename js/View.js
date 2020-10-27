var helloWorld, button, output;

class View extends EventTarget {

    constructor(){
        super();

        helloWorld = "Hello World!";
        button = document.getElementById("button");
        output = document.getElementById("output");
    }

    initListener(){
        button.addEventListener("click", (event) => {
            super.dispatchEvent((function () {
                let e = new Event("onButtonClicked");
                e.data = event.target.id;
                return e;
        })());
    });
    }

}

export default new View();