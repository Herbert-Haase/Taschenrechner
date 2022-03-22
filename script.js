const numbuttons = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const operators = document.querySelectorAll(".operator");

const input = {
    num : []
};
const operand = {};


numbuttons.forEach((num) => {
    num.addEventListener('click', () => {
        input.num.push(parseInt(num.textContent))
    })
});

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        for(let i = 0; i < input.num.length; i++) {
            input.num[i] *= 10 ** (input.num.length -1 -i);
        }
        const actualNum = input.num.reduce((total, num) => total + num, 0);
        if(!operand.firstNum) operand.firstNum = actualNum;
        operand.secodNum = actualNum;
        delete input.num; input.num = [];
        console.log(actualNum);
    })
})

