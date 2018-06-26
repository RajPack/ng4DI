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

        createAjaxFetchButton();

    }
    function createAjaxFetchButton() {
        const div = document.createElement("div");

        div.classList="rounded bg-light m-5 p-3 ajax-container";
        const button = document.createElement("button");
        // button.addEventListener('click', POXHR.fetch.bind(this,'sampleData.json', 'get'));
        button.addEventListener('click', function() {
            POXHR.fetch('sampleData.json', 'get', AjaxResponseHandler );
        })
        button.textContent = "Load Sample Data";
        button.classList = "btn btn-info";
        button.setAttribute('id', "myAjaxButton");
        div.appendChild(button);
        document.querySelector('.container').appendChild(div);

    }

    function AjaxResponseHandler(data){
        var div = document.createElement('div');
        div.classList="p-4 m-4 bg-info text-light data-val rounded";
        div.innerText = data.Name;
        document.querySelector(".ajax-container").appendChild(div);
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


const PromiseDemo = (()=>{
     function fakeAjax (url) {
         var promise = new Promise((res, rej)=>{
            setTimeout(getData.bind(this,res, rej) , 1000)
         });
         return promise;
     }

     function getData(res, rej) {
         var obj = {
             name : "faked response"
         }
        rej("Fatal Error");

     }

     return fakeAjax;
})();


var fakePromise = PromiseDemo("./sampl.json");

fakePromise.then( (response)=> {
    console.log("Got a response");
    console.log(response.name);

}).catch( (error ) => {
    console.log(error);
})




setTimeout(function(){
    fakePromise.then((response)=>{
        console.log(response);
    });

},3000);


