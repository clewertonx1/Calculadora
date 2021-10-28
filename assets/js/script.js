let num1 = ''
let num2 = ''
let operacao = ''
let resSoma = 0
let resSubtracao = 0
let resMultiplicacao = 0
let resDivisao = 0

function handleWithKeyPress(key){
    num1 = num1 + key
    conta.innerHTML += key
}
function handleWithOperationKeyPress(operation){
    conta.innerHTML += ` ${operation} `
    num2 = num1;
    num1 = '';
    operacao = operation
}

function teclaCalcular() {

    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    if (operacao == '+') {
        resSoma = num2 + num1;
        res.innerHTML = resSoma
        operacao = ''
    } else if (operacao == '-') {
        resSubtracao = num2 - num1;
        res.innerHTML = resSubtracao
        operacao = ''
    } else if (operacao == '*') {
        resMultiplicacao = num2 * num1;
        res.innerHTML = resMultiplicacao
        operacao = ''
    } else if (operacao == '/') {
        resDivisao = num2 / num1;
        res.innerHTML = resDivisao
        operacao = ''
    }
    else {
        alert("Operação inválida. Tente novamente")
    }
}

function teclaReset() {
    location.reload();
}