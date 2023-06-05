const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onInput);

function onInput(event) {

  spanEl.setAttribute("style", `font-size: ${event.currentTarget.value}px`)

}
