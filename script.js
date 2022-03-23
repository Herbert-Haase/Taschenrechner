const numbuttons = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const operators = document.querySelectorAll(".operator");
const nan = document.querySelectorAll(".nan");

const input = {
    num : []
};
const operand = {};


numbuttons.forEach((num) => {
    num.addEventListener('click', () => {
        input.num.push(parseInt(num.textContent))
        showOnDisplay();
    })
});

nan.forEach((nanButton) => {
    nanButton.addEventListener("click", () => {
        for(let i = 0; i < input.num.length; i++) {
            input.num[i] *= 10 ** (input.num.length -1 -i);
        }
        const actualNum = input.num.reduce((total, num) => total + num, 0);
        if(!operand.firstNum) operand.firstNum = actualNum;
        else {
            operand.secodNum = actualNum;
            operator(operand.firstNum, operand.secodNum, operand.operator);
        }
        delete operand.secodNum;
        delete input.num; input.num = [];
        showOnDisplay();
    })
});

const plus = (first, second) => { return first = first + second;}
const minus = (first, second) => { return first = first - second;}
const multiplicate = (first, second) => { return first = first * second;}
const divide = (first, second) => { return first = first / second;}


function operator(first, second, calculate) {
    operand.firstNum = calculate(first, second);
    delete operand.secodNum;
}


operators.forEach((singleOperator) => {
    singleOperator.addEventListener("click", () => {
      switch(singleOperator.getAttribute("id")) {
          case("plus"):
            operand.operator = plus;
            display.textContent += "+";
            break;
          case("minus"):
            operand.operator = minus;
            display.textContent += "-";
            break;
          case("multiplicate"):
            operand.operator = multiplicate;
            display.textContent += "*";
            break;
          case("divide"):
            operand.operator = divide;
            display.textContent += "/"
        }
    });
});

function showOnDisplay() {
    let show = operand.secondNum || operand.firstNum || input.num.join("");
    display.textContent = show;
}



