//NIVEL 1; EJERCICIO 1

suma = ((num1, num2) => num1 + num2)(1,2);

console.log(suma);


//NIVEL 2; EJERCICI 1

let arrow = colorNuevo => obj = {color: colorNuevo}

console.log(arrow(`rojo`));



//NIVEL 2; EJERCICIO 2
module.exports = class Persona{

    constructor(nom){
        this.nom = nom;
    };

dirNom(){
        console.log(`tu nombre es: ${this.nom}`);

}
}

let persona1 = new Persona(`Laura`);
persona1.dirNom();

module.exports = dirNom

//NIVEL 3; EJERCICI 1

class ClaseAbstracta {
    constructor(){
      if (this.constructor === ClaseAbstracta) {
       throw new Error( 'Esta clase es abstracta y no puede ser instanciada' );
      }
    }
  }
  
  
  
  function createObj(){
  
  return (Object.create(ClaseAbstracta.prototype,{constructor : {value : ClaseAbstracta}}))
  
  }
  
  
  const Obj1 = createObj(),
  Obj2 = createObj(),
  Obj3 = createObj()
  
  console.log(Obj1);
  console.log(Obj2);
  console.log(Obj3);




