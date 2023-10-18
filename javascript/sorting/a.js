const nextButton = document.querySelector('#nextButton');
const inputArray = document.querySelector('#array');
const sortButton = document.querySelector('#sortButton');
const clearButton = document.querySelector('#clearButton');
const sortedOutput = document.querySelector('#sortedArray');
let array = [];
let sortedArray = []

nextButton.addEventListener('click',() => {
    const numberInput = document.querySelector('#numbers');
    number = numberInput.value;
    array.push(number);
    numberInput.value = '';
    showArray(number);
})

sortButton.addEventListener('click',() => {
    sortedArray = array.sort((a,b) => b-a);
    sortedOutput.textContent = ` Sorted Array : ${sortedArray}`;

})

clearButton.addEventListener('click',() => {
    array = [];
    sortedArray = [];
    sortedOutput.textContent = ` Sorted Array : `;
    inputArray.textContent = `Array : `;
})

function showArray (number) {
    inputArray.textContent = `Array : ${array}`;
}