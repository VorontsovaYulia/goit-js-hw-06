const inputEl = document.querySelector("input")
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divEl = document.querySelector("#boxes");
let arrayDiv = [];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonCreate.addEventListener("click", onBtnCreate);
buttonDestroy.addEventListener("click", onBtnDestroy);
inputEl.addEventListener("input", onInput);

let amount = 0;

function onInput(event) {
  
  return amount = event.currentTarget.value
  
}

 
function onBtnCreate(event) {

  destroyBoxes();
  createBoxes(amount)
  
}

function onBtnDestroy(event) {
  
  destroyBoxes()
  inputEl.value = ""
  amount = 0;
}

function destroyBoxes() {
  divEl.innerHTML = "";
  
}

function createBoxes(param) {

  for (let i = 0; i < param; i += 1){
    const randomColor = getRandomHexColor();
    const newDiv = document.createElement("div");
   
    
    if (i === 0) {
       newDiv.style.width = "30px";
       newDiv.style.height = "30px";
    } else {

      newDiv.style.width = `${30 + i*10}px`
      newDiv.style.height = `${30 + i*10}px`
    }
   
    newDiv.style.backgroundColor = `${randomColor}`;
    newDiv.style.marginBottom = "5px"
  
    arrayDiv.push(newDiv)

  }

  divEl.append(...arrayDiv);
  arrayDiv = [];

}

