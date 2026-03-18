const myGlobal = 0; // constante global

function myFunction(){
    const myNumber = 1; // constante de scope function
    console.log(myGlobal);

    function parent(){ // funcion dentro de una funcion
        const inner = 2; // constante
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child(); // retornamos la funcion child
    }
    return parent(); // retornamos la funcion parent
}

// llamamos la funcion principal myFunction
myFunction();