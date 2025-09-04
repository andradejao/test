function calcular() {
    // Captura o Input 1
    const valor1 = Number(document.getElementById('inputValor1').value)
    // Captura o Input 2
    const valor2 = Number(document.getElementById('inputValor2').value)
    // Captura o Input Radio selecionado
    const operacao = document.querySelector('input[name="radioButton"]:checked')
    // Varíavel para armazenar os resultados
    let resultado

    if (!operacao) {
        return alert("Selecione uma operação!")
    }

    // Lógica para aplicação da operação
    if (operacao.value == "soma") {
        resultado = valor1 + valor2
    } else if (operacao.value == "subtracao") {
        resultado = valor1 - valor2
    } else if (operacao.value == "multiplicacao") {
        resultado = valor1 * valor2
    } else {
        resultado = valor1 / valor2
    }
    // Escreve o resultado do cálculo dentro do Input Resultado    
    document.getElementById('inputResultado').value = resultado
}

// Função criada para limpar o formulário 
function limpar() {
    document.getElementById('meuForm').reset()
}