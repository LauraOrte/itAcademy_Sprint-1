/*NIVEL 1;
Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions*/

function suma(a, b){
    return a + b;
}

function resta(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}



/*Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1*/
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];


let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];



let getSalary = (employed) => {

    return new Promise((resolve, reject) => {
        let salaryEncont = salaries.find(salary => salary.id === employed.id);

        if (!salaryEncont){
            reject("El salario con el id no existe");
        } else {
            resolve(salaryEncont);

        }
    });
}


let getEmployee = (id) => {

    return new Promise((resolve, reject) => {
        let employeEncont = employees.find(employed => employed.id === id);

        if (!employeEncont){
            reject("El id no existe");
        } else {
            setTimeout(() =>{
                resolve(employeEncont);
            }, 2000);
            
        }

    })
}

async function funcionAsincroTime(){
    try{
    const idUserTime = await getEmployee(1);
    console.log(idUserTime);
    } catch (error){
        console.log(error);
    }
}



module.exports = {
    suma,
    resta,
    multiplicar,
    dividir,
    getSalary,
    getEmployee,
    funcionAsincroTime
}
