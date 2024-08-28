document.getElementById('calculatorForm').addEventListener('submit', async function(event) {
    event.preventDefault() //avoid page reloading

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    await fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({ num1, num2 })
    })
    .then(response => response.json())
    .then(data => document.getElementById('sum').innerText = `Sum = ${data.sum}` ) //showing the sum
})