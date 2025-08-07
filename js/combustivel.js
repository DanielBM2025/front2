export default function combustivel() {

    const calcularCombustivel = document.getElementById("calcularCombustivel")
    const resultadoCombustivel = document.querySelector("#resultadoCombustivel")

    calcularCombustivel.addEventListener("click", function () {

        const alcool = document.getElementById("alcool").value
        const gasolina = document.getElementById("gasolina").value

        if (isNaN(alcool) || isNaN(gasolina) || alcool <= 0 || gasolina <= 0) {
            resultadoCombustivel.innerHTML = "preencha corretamente o alcool e a gasolina"
            resultadoCombustivel.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
            resultadoCombustivel.classList.add("alertaVermelho")
            return
        }

        const diferenca = gasolina / alcool
        let classificacao
        let cor
        if (diferenca > 0.7) {
            classificacao = "alcool"
            cor = "alertaVerde"
        }

        else {
            classificacao = "gasolina"
            cor = "alertaAmarelo"
        }
        resultadoCombustivel.innerHTML = ` <br>Classificação: ${classificacao}`
        resultadoCombustivel.classList.remove("alertaVermelho", "alertaVerde", "alertaAmarelo")
        resultadoCombustivel.classList.add(cor)


    })
}

