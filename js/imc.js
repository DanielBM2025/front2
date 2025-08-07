export default function imc() {

    const botaoImc = document.getElementById("calcularImc")
    const resultadoImc = document.querySelector("#resultadoImc")

    botaoImc.addEventListener("click", function () {
        const peso = document.getElementById("peso").value
        const altura = document.getElementById("altura").value
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            resultadoImc.innerHTML = "preencha corretamente o peso e a altura"
            resultadoImc.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
            resultadoImc.classList.add("alertaVermelho")
            return
        }
        const valorImc = peso / (altura * altura)
        let classificacao
        let cor
        if (valorImc < 18.5) {
            classificacao = "magreza"
            cor = "alertaVermelho"
        }
        else if (valorImc < 24.9) {
            classificacao = "normal"
            cor = "alertaVerde"
        }
        else if (valorImc < 29.9) {
            classificacao = "gordo"
            cor = "alertaAmarelo"
        } else {
            classificacao = "muito gordo"
            cor = "alertaVermelho"
        }
        resultadoImc.innerHTML = `IMC: ${valorImc.toFixed(2)} <br>Classificação: ${classificacao}`
        resultadoImc.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
        resultadoImc.classList.add(cor)


    }





    )
}