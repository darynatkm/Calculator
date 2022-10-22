let display = document.getElementById('displayLine')
;
let result = document.getElementById('result');
let arr = [];
let tempElement = document.createElement('div');



// Create an expression array 
const clickButton = (event) => {
    if( display.result.value == 0) {
        display.result.value  = event.innerHTML;
        arr.push(event.innerHTML);
    }
    else {
        display.result.value  += event.innerHTML;
        arr.push(event.innerHTML);
    }
}

// Calculate everything
const calculate = () => {

    display.result.value = eval(display.result.value);

}

// Delete a sign
const del = () => {
    display.result.value = 0;
    arr = [];
}

// Abs
const abs = (event) => {
    display.result.value = '-' + display.result.value

}

// remove
const remove = () => {
    display.result.value = display.result.value.substring(0, (display.result.value.length-1));
    arr.pop();        
}

