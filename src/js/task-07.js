const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInput);

spanEl.style.fontSize = `${inputEl.value}px`

function onInput(event) {

  spanEl.style.fontSize = `${event.currentTarget.value}px`
  
}
