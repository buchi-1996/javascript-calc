
const clearAll = document.getElementById('clear-all');
const clear= document.getElementById('clear');
const equal = document.getElementById('equal');
const btn = document.querySelectorAll('.my-btn');
let display = document.querySelector('.display');

btn.forEach(data => {
    data.addEventListener('click', ()=>{
        let content = data.getAttribute('data-num');
        display.textContent += content;
    })
})

class UI{
    static clearAllInputs(){
        display.textContent = '';
    }

    static clearSingleInput(){
        let content = display.textContent;
        let arr = content.split('');
        console.log(arr);
        arr.pop();
        display.textContent = arr.join('');
        
    }

    static evaluate(){
        let content = display.textContent;
        display.textContent = eval(content);
    }
}


clearAll.addEventListener('click', (e)=>{
    UI.clearAllInputs();
    e.preventDefault();
})

clear.addEventListener('click', (e)=>{
    UI.clearSingleInput();
    e.preventDefault();
})

equal.addEventListener('click', (e)=>{
    UI.evaluate();
    e.preventDefault();
})