let btn = document.getElementById("btn")

btn.addEventListener('click', function(){

    let nome = prompt('Qual é seu nome?')

    let idade = prompt(`Olá, ${nome}! Quantos anos você tem?`)

    alert(`Olá, ${nome}! Que tem ${idade} anos, é um grande prazer te conhecer!`)
})