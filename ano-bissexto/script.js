function bissexto(){
    
    var x;
    var anos=prompt("Digite o ano que será analisado:") 

    if (anos % 400 == 0 || (anos % 4 == 0 && anos % 100 != 0) ){
        x = anos +  "  É um ano bissexto!";
        document.getElementById("ano").innerHTML=x
    } else {
        x= anos +  "  não é um ano bissexto!";
        document.getElementById("ano").innerHTML=x
    }
}