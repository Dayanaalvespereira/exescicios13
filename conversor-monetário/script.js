btn = document.getElementById ("btn")

btn.addEventListener("click", function() {
    
let d
let dolar=prompt("Quanto está a cotação do dólar agora?")
dolar= parseFloat(dolar)

var real =prompt("Quantos R$ você tem na carteira?")
real= parseFloat(real)


d = real/dolar + " US$" + " é a quantidade em dolar que você tem."; 
alert(d)
})