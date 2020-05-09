var inputExpression = document.getElementById('inputField');

function intialization() {
    if (inputExpression.value == 0) {
        return inputExpression.value = "";
    }
}

//Addition, Substraction, Multiplication, Division


function callOperators() {
    currentValue = inputExpression.value;
    if (currentValue != "0") {
        //var listOfOperators = ['+', '-', '*', '/'];
        document.getElementById('addition').addEventListener('click', function() {
            if (inputExpression.value[inputExpression.value.length - 1] != "+" &&
                inputExpression.value[inputExpression.value.length - 1] != "-" &&
                inputExpression.value[inputExpression.value.length - 1] != "*" &&
                inputExpression.value[inputExpression.value.length - 1] != "/") {
                inputExpression.value = inputExpression.value.concat("+");
            }
        });

        document.getElementById('substration').addEventListener('click', function() {
            if (inputExpression.value[inputExpression.value.length - 1] != "-" &&
                inputExpression.value[inputExpression.value.length - 1] != "+" &&
                inputExpression.value[inputExpression.value.length - 1] != "*" &&
                inputExpression.value[inputExpression.value.length - 1] != "/") {
                inputExpression.value = inputExpression.value.concat("-");
            }
        });

        document.getElementById('multiplication').addEventListener('click', function() {
            if (inputExpression.value[inputExpression.value.length - 1] != "*" &&
                inputExpression.value[inputExpression.value.length - 1] != "+" &&
                inputExpression.value[inputExpression.value.length - 1] != "-" &&
                inputExpression.value[inputExpression.value.length - 1] != "/") {
                inputExpression.value = inputExpression.value.concat("*");
            }
        });

        document.getElementById('division').addEventListener('click', function() {
            if (inputExpression.value[inputExpression.value.length - 1] != "/" &&
                inputExpression.value[inputExpression.value.length - 1] != "*" &&
                inputExpression.value[inputExpression.value.length - 1] != "+" &&
                inputExpression.value[inputExpression.value.length - 1] != "-") {
                inputExpression.value = inputExpression.value.concat("/");
            }
        });
    }
}

//To clear the input field
document.getElementById('clear').addEventListener('click', function() {
    inputExpression.value = 0;
});


document.getElementById('execute').addEventListener('click', function() {
    inputExpression.value = eval(inputExpression.value);
});

document.getElementById('number-1').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "1";
    callOperators();
});

document.getElementById('number-2').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "2";
    callOperators();
});

document.getElementById('number-3').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "3";
    callOperators();
});

document.getElementById('number-4').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "4";
    callOperators();
});

document.getElementById('number-5').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "5";
    callOperators();
});

document.getElementById('number-6').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "6";
    callOperators();
});

document.getElementById('number-7').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "7";
    callOperators();
});

document.getElementById('number-8').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "8";
    callOperators();
});

document.getElementById('number-9').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "9";
    callOperators();
});

document.getElementById('number-0').addEventListener('click', function() {
    intialization();
    inputExpression.value = inputExpression.value + "0";
    callOperators();
});