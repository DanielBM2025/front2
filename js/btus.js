export default function btus() {
    const botaoBtus = document.getElementById("calcularBtus");
    const resultadoBtus = document.getElementById("resultadoBtus");

    botaoBtus.addEventListener("click", function () {
        const largura = parseFloat(document.getElementById("largura").value);
        const comprimento = parseFloat(document.getElementById("comprimento").value);

        const solManha = document.getElementById("sol-manha").checked;
        const solTarde = document.getElementById("sol-tarde").checked;

        if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0 || (!solManha && !solTarde)) {
            resultadoBtus.innerHTML = "Preencha todos os campos corretamente e selecione uma opção de sol.";
            resultadoBtus.classList.remove("alertaVerde", "alertaVermelho");
            resultadoBtus.classList.add("alertaVermelho");
            return;
        }

        const area = largura * comprimento;
        const fatorSol = solManha ? 600 : 800;
        const btus = area * fatorSol;

        resultadoBtus.innerHTML = `Área: ${area.toFixed(2)} m² <br>Necessário: <strong>${btus.toLocaleString()} BTUs</strong>`;
        resultadoBtus.classList.remove("alertaVermelho");
        resultadoBtus.classList.add("alertaVerde");
    });
}