'use strict'

var suma=0;
var contador=0;

do{
var numero = parseInt(prompt('introduce numeros hasta que metas uno negativo', 0));

if(isNaN(numero)){
	numero = 0;
}else if(numero >= 0){
    suma += numero;
    contador++;
}
}while(numero >= 0){
    alert("la suma de todos los numeros es: " + suma);
    alert("la media de los numeros es: " + (suma/contador));
}