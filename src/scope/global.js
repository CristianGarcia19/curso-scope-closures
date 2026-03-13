// Variables

var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb' // reasignacion
var a = 'aa' // redeclaracion

//Global scope
/**
 *  las variables globales se pueden acceder desde cualquier parte del codigo
 *  incluso en funciones
 */
var mascota = 'Perro'; // declaramos y asignamos, esta va a ser nuestra variable global

function imprimirMascota(){
    console.log(mascota);
}

imprimirMascota(); // imprimimos la funcion
