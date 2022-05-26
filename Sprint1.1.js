//NIVEL 1; EJERCICIO 1

let nom;

nombre("Laura");


function nombre(nom){
    console.log("Tú nombre es: " + nom);
}



//NIVEL 2; EJERCICIO 1

let nom = "Laura";
let cognom1 = "Ortega";
let cognom2 = "Iglesias";

console.log(`tu nombre es: ${nom} 
tu primer apellido es: ${cognom1}
i tu segundo apellido es: ${cognom2}`);




//NIVEL 2; EJERCICIO 2

let num;

console.log(retornar(4));



function retornar(num){
    return `el número que has elegido es: ${num}`;
}




//NIVEL 3; EJERCICIO 1
var arrayBucle = [];

function bucle(){
    for(i=0; i<=9; i++){
        console.log(i);

    }
 return `fin del ciclo`;
}

while(arrayBucle.length<10){
    arrayBucle.push(bucle);
}

function bucleFinal(){
    arrayBucle.forEach( function(elemento){
        console.log(elemento());
    });
}


bucleFinal();




//NIVEL 3; EJERCICIO 2

var nom = (function(nom){
    console.log(`tu nombre es: ${nom}`);
}) (`Laura`);

