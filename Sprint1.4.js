//NIVEL 1; EJERCICIO 1, EJERCICI 2

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
            resolve(employeEncont);
        }

    })
}


const funcionAsincro = async (id) => {
    try{
        const idUser = await getEmployee(id);
        const SalarioUser = await getSalary(idUser);
        console.log(SalarioUser);
    } catch (error){
        console.log(error);
    }

}

console.log(funcionAsincro(2));




//NIVEL 2; EJERCICI 1

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

console.log(funcionAsincroTime());



//NIVEL 3; EJERCICI 1
/*Los errores se darían en caso de indicar el ID = 0, o <3. Entonces no encontraría el id, y tampoco su salario.
    console.log(funcionAsincro(0));
    console.log(funcionAsincro(4));
    console.log(funcionAsincro(5)); ( y suscesivamente..)

En el siguiente ejercicio;
    async function funcionAsincroTime(){
    try{
    const idUserTime = await getEmployee(0); ( 4, y sucesivamente...)
    console.log(idUserTime);
    } catch (error){
        console.log(error);
    }
}

console.log(funcionAsincroTime());
*/
