function somar() {
    const n1 = document.getElementById('valor1').value
    const n2 = document.getElementById('valor1').value
    const rs = parseFloat(n1) + parseFloat(n2)
    console.log(rs)
    document.getElementById('total').innerHTML = `<br> Total: ${rs}`
}