var texto = document.getElementById("texto__digitado");
var textoSaida = document.getElementById('output').innerHTML;

function cript() {  
    var res = texto.value
    if(texto.value.trim() !== ''){
        res = res.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, "ai").replace(/o/g, 'ober').replace(/u/g, 'ufat');      
    
        document.getElementById('output').innerHTML = 
        '<textarea readonly id="texto2">' + res + '</textarea>' + '<div class="botoes2">' +
        '<button class="btncopiar" id="copiar" onclick="copiar()">Copiar</button>' + '</div>';

        event.preventDefault();

    }

    else{
        alert("Insira um texto a ser codificado");
        event.preventDefault();
    }    
}

function descript() { 
    var res = texto.value; 

    if(texto.value.trim() !== ''){

        res = res.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, "a").replace(/ober/g, 'o').replace(/ufat/g, 'u');

        document.getElementById('output').innerHTML = 
        '<textarea readonly id="texto2">' + res + '</textarea>' + '<div class="botoes2">' +
        '<button class="btncopiar" id="copiar" onclick="copiar()">Copiar</button>' + '</div>';

        event.preventDefault();
    }
    else{
        alert("Insira um texto a ser decodificado");
        event.preventDefault();
    }
}

function copiar(){
    navigator.clipboard.writeText(document.getElementById('texto2').value);
    alert("copiado");
}
