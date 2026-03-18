// funcion saludar

function saludar(){
    let nombre = 'Cristian'; // declaracion - asignacion de la variable
    function saludarNombre(){
        return `Hola ${nombre}`;
    };
    return saludarNombre;
}

const s = saludar();
console.log(s);
console.log(s());