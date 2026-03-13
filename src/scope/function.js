/**
 * Las declaraciones de variables dentro de funciones
 * se conocen como scope funcion, podemos acceder a ella dentro de la funcion
 * tambien si tenemos funciones aninadas.
 * 
 * Todas las variables que tengamos dentro de una o varias funciones no se pueden acceder de
 * manera global, al intentarlo, tendremos como resultado que no esta definida la variable 
 */

// Creacion de la funcion saludar

function saludar(){
    let nombre = 'Cristian'; // la diferencia entre var y let, es que let no se deja redeclarar
    if(nombre === 'Cristian'){ // el comparador === compara tipo y valor "mas estricto"
        console.log(`Hola ${nombre}`);
    } 
}

saludar();