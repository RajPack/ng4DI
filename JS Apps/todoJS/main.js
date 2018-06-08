

let Todo = (() => {

    let todoList = ["Initial Sample Todo Item"];
    let el_id = "listC";
    let elem;

    function init() {
        elem = document.getElementById(el_id);
        render(todoList);
        bindEvents();
    }
    function bindEvents() {
        bindAddTodo();
        searchBind();
        searchResetBind();
    }
    function render(list) {
        let inner_html = templateGen(list);
        if(!inner_html){
            inner_html = `<h2>Great You have a clean slate now!!</h2>`
        }
        elem.innerHTML = inner_html;
        removeItemBind();
    }

    function templateGen(list) {
        let template = '';
        for (let item of list) {
            template += `<div class='todo-item'>
                            <span class='item'>${item}</span>
                            <button class='remove-item'>X</button>
                        </div>`;
        }
        return template;
    }
    function bindAddTodo() {
        let elId = "add-todo-button", elem = document.getElementById(elId);
        elem.addEventListener("click", () => {
            let inputelem = document.getElementById("add-todo-input");
            let inputval = inputelem.value;
            if (inputval) {
                todoList.push(inputval);
                render(todoList);
                inputelem.value = null;
            }
        });
    }
    function searchBind() {
        let elId = "todo-search-input", elem = document.getElementById(elId);
        elem.addEventListener("keyup", (event) => {
            let val = event.target.value;
            let filteredList = todoList.filter((item) => {
                let match = item.match(val);
                return match ? true : false;
            });
            render(filteredList);
        });
    }
    function searchResetBind() {
        let elId = "reset-todo-button", elem = document.getElementById(elId);
        elem.addEventListener("click", () => {
            let elId = "todo-search-input", elem = document.getElementById(elId);
            elem.value = null;
            render(todoList);
        });
    }
    function removeItemBind() {
        let elSel = '#' + el_id;
        let elem = document.querySelector(elSel);
        elem.addEventListener('click', (event) => {
            if (event.target.classList.contains("remove-item")) {
                let target_button = event.target;
                let itemToRemove = target_button.parentElement.children[0].innerText;
                removeItem(itemToRemove);
                render(todoList);
            }
        });
    }
    function removeItem(remove_item) {
        todoList = todoList.filter((item) => {
            return remove_item === item ? false : true;
        })
    }
    return todo = {
        init: init,
        bindEvents: bindEvents,
        render: render
    }

})();


document.addEventListener("DOMContentLoaded", Todo.init);