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
    })
});

nan.forEach((nanButton) => {
    nanButton.addEventListener("click", () => {
        for(let i = 0; i < input.num.length; i++) {
            input.num[i] *= 10 ** (input.num.length -1 -i);
        }
        const actualNum = input.num.reduce((total, num) => total + num, 0);
        if(!operand.firstNum) operand.firstNum = actualNum;
        operand.secodNum = actualNum;
        operator(operand.firstNum, operand.operator, operand.secodNum);
        delete operand.secodNum;
        delete input.num; input.num = [];
    })
});

const plus = () => { return first = first + second;}
const minus = () => { return first = first - second;}
const multiplicate = () => { return first = first * second;}
const divide = () => { return first = first / second;}


operators.forEach((singleOperator) => {
    singleOperator.addEventListener("click", () => {
      switch(singleOperator.getAttribute("id")) {
          case("plus"):
            operand.operator = plus;
            break;
          case("minus"):
            operand.operator = minus;
            break;
          case("multiplicate"):
            operand.operator = multiplicate;
            break;
          case("divide"):
            operand.operator = divide;

      };

    });

});

function showOnDisplay() {
    let show = operand.secondNum || operand.firstNum || input.num.join(""):
}



