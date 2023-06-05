const inputEL = document.querySelector("#validation-input");
const inputLength = Number(inputEL.dataset.length)

inputEL.addEventListener("blur", onInput);

function onInput(event) {
    
    inputEL.classList.add('invalid')
    if (event.currentTarget.value.length === inputLength) {
       
        inputEL.classList.remove('invalid') 
        inputEL.classList.add('valid')
    
    }
}
