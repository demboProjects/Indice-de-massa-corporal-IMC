function calculaIMC(peso, altura) {
    if (!(verifyElement(peso) && verifyElement(altura) && altura != 0)) {
        return "Entrada de valor inválido"
    } else {
        const imc = getIMC(peso, altura);
        const result = getInfoOfIMC(imc)

        return `o seu IMC é ${imc.toFixed(2)} : ${result}`
    }

}


function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc;
}

function verifyElement(element) {
    if (!element) {
        return false;
    } else {
        return true;
    }
}

function getInfoOfIMC(imc) {
    if (imc > 40) {
        return "Obesidade grau 3";
    } else if (imc >= 35) {
        return "Obesidade grau 2"
    } else if (imc >= 30) {
        return "Obesidade grau 1"
    } else if (imc >= 25) {
        return "Sobrepeso";
    } else if (imc >= 18.5) {
        return "Peso Normal"
    } else if (imc < 18.5) {
        return "Abaixo do peso"
    }
}

module.exports = { calculaIMC }