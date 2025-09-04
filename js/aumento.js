function aumento() {
    const salarioAtual = Number(document.getElementById('inputSalario').value)
    const SalarioNovo = salarioAtual * 1.25
    const rs = document.getElementById('resultadoSalario').innerText = `O salário de ${salarioAtual} 
    com o aumento de 25% totaliza ${SalarioNovo}`
}