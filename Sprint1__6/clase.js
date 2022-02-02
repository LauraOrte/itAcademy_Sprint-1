


class Persona{

    constructor(nom){
        this.nom = nom;
    };

dirNom(){
        (`tu nombre es: ${this.nom}`);

}
}

let persona1 = new Persona(`Laura`);
persona1.dirNom();

module.exports = Persona