// display

function display(num) {
    output.value +=num;     
}

// clear all

function clearAll() {
    output.value=''
}

function evaluateExp() {
    output.value=eval(output.value)
}

// removelast item

function removeLast() {
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}