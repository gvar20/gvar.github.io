var alerta = document.getElementById("alerta"); 
var boton = document.getElementById("boton_resolver")
var respuesta1 = document.getElementById("card_1")
var respuesta2 = document.getElementById("card_2")

function dar_click(){
    let input_numero = document.getElementById("txt_numero");
    respuesta1.innerHTML="";
    respuesta2.innerHTML="";
    let numero = input_numero.value;
    var validar;
    var texto;
    if(numero<=1 || numero==""){
        alert("Los datos ingresados son incorrectos");
    }else{        
        var numeros_menores = numeros_primos_menores(numero);
        validar = es_numero_primo(numero);
        if (validar==true || (numero==2)) {
            texto = "Es un número primo"
        }else{
            texto = "No es un número primo"
        }        
        
    }
    respuesta1.innerHTML = numero + " " + texto;
    if(numero==2){
        respuesta2.innerHTML=("No hay números primos menores a 2")
    }else{
        numeros_menores.forEach(element => respuesta2.innerHTML+=(element)+" ");
    }    
};

function es_numero_primo(numero){ 
    if(numero!=2 && numero%2==0){
        return false;
    }else{        
        var limite = Math.floor(Math.sqrt(numero))+1;
        for (var x = 2; x <= limite; x++) {
            if(numero%x==0) {
                return false;
            }         
        }           
        return true;
    }
        
}

function numeros_primos_menores(numero){
    var numeros = [];
    var indice = 0;
    var contador = 0;
    for(var x=2; x<numero;x++)
    {
        for(var y=1; y<=x; y++)
        {
            if(x % y == 0)
            {
                contador++;
            }
        }
        if (contador==2) {
            numeros[indice]=x;
            indice++;
        }          
        contador=0;     
    }
    return numeros;
}