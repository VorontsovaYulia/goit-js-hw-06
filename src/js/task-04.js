let counterValue = 0;

const btnMin = document.querySelector('[data-action="decrement"]');
const btnMax = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");

btnMin.addEventListener("click", onClickBtnMin)
btnMax.addEventListener("click", onClickBtnMax)

function onClickBtnMin(event) {
    
    spanValue.textContent = counterValue -= 1;
}

function onClickBtnMax(event) {
    
    spanValue.textContent = counterValue += 1;
}

