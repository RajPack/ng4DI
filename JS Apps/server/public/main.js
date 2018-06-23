const demo = (function () {
    function onLoad() {
        const loadedDiv = document.createElement("div");
        loadedDiv.textContent = "Page has been loaded!!";
        const containerDiv = document.querySelector(".container");
        containerDiv.appendChild(loadedDiv);

        const input = document.createElement('input');
        input.setAttribute('type', "text");
        input.classList = "text-box";
        containerDiv.appendChild(input);
        const button = document.createElement('button');
        button.textContent = "Print Value"
        containerDiv.appendChild(button);
        button.addEventListener('click', onButtonClick);

        input.addEventListener("keyup", onKeyUp);
    }

    function onButtonClick() {
        let inputValContainer = document.getElementById('value-container');
        const input = document.querySelector('.text-box');
        const value = input.value;

        if (inputValContainer) {
            setValue(inputValContainer, value);
        } else {
            inputValContainer = createValueContainer();
            setValue(inputValContainer, value);
        }
    }

    function onKeyUp(e) {
        const input = e.target;
        let inputValContainer = document.getElementById('value-container');
        if (inputValContainer) {
            setValue(inputValContainer, input.value);
        } else {
            inputValContainer = createValueContainer();
            setValue(inputValContainer, input.value);
        }
    }

    function createValueContainer() {
        const inputValContainer = document.createElement('div');
        inputValContainer.setAttribute('id', "value-container");
        document.querySelector('.container').appendChild(inputValContainer);

        return inputValContainer
    }

    function setValue(inputValContainer, value) {
        inputValContainer.textContent = value;
    }

    return {
        onLoad: onLoad
    }
}());


(function () {
    window.addEventListener("load", demo.onLoad);
}());