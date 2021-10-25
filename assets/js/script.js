let num1 = ''
let num2 = ''
let operacao = ''
let resSoma = 0
let resSubtracao = 0
let resMultiplicacao = 0
let resDivisao = 0

function teclaUm() {
    num1 = num1 + 1
    conta.innerHTML += '1'
    console.log(num1)
}
function teclaDois() {
    num1 = num1 + 2
    conta.innerHTML += '2'
    console.log(num1)
}
function teclaTres() {
    num1 = num1 + 3
    conta.innerHTML += '3'
    console.log(num1)
}
function teclaQuatro() {
    num1 = num1 + 4
    conta.innerHTML += '4'
    console.log(num1)
}
function teclaCinco() {
    num1 = num1 + 5
    conta.innerHTML += '5'
    console.log(num1)
}
function teclaSeis() {
    num1 = num1 + 6
    conta.innerHTML += '6'
    console.log(num1)
}
function teclaSete() {
    num1 = num1 + 7
    conta.innerHTML += '7'
    console.log(num1)
}
function teclaOito() {
    num1 = num1 + 8
    conta.innerHTML += '8'
    console.log(num1)
}
function teclaNove() {
    num1 = num1 + 9
    conta.innerHTML += '9'
    console.log(num1)
}
function teclaZero() {
    num1 = num1 + 0
    conta.innerHTML += '0'
    console.log(num1)
}

function teclaSoma() {
    conta.innerHTML += ' + '
    num2 = parseFloat(num1);
    console.log(`NUM1: ${num1} NUM2: ${num2}`)
    num1 = null;
    operacao = 'opSoma'
}
function teclaSubtracao() {
    conta.innerHTML += ' - '
    num2 = parseFloat(num1);
    console.log(`NUM1: ${num1} NUM2: ${num2}`)
    num1 = null;
    operacao = 'opSub'
}
function teclaMultiplicacao() {
    conta.innerHTML += ' * '
    num2 = parseFloat(num1);
    console.log(`NUM1: ${num1} NUM2: ${num2}`)
    num1 = null;
    operacao = 'opMult'
}
function teclaDivisao() {
    conta.innerHTML += ' / '
    num2 = parseFloat(num1);
    console.log(`NUM1: ${num1} NUM2: ${num2}`)
    num1 = null;
    operacao = 'opDiv'
}

function teclaCalcular() {
    if (operacao == 'opSoma') {
        resSoma = num2 + num1;
        res.innerHTML = resSoma
        operacao = ''
    } else if (operacao == 'opSub') {
        resSubtracao = num2 - num1;
        res.innerHTML = resSubtracao
        operacao = ''
    } else if (operacao == 'opMult') {
        resMultiplicacao = num2 * num1;
        res.innerHTML = resMultiplicacao
        operacao = ''
    } else if (operacao == 'opDiv') {
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