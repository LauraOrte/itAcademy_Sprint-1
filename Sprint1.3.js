//NIVEL 1; EJERCICIO 1

function promesa(){
    return new Promise(function(resolve, reject){
        if(true){
        resolve(`Todo correcto.`);
        }
        reject(`Error!`);
    });
}   


promesa().then(function(mensaje){
    console.log(mensaje);
}).catch(function(mensaje){
    console.log(mensaje);
});


//NIVEL 1; EJERCICIO 2

const call = (num, callback) =>{
    if(num > 5){
        callback(`El número es mayor que 5`);
    }
        callback(`El número es menor a 5`);
}

call(2, (callback) =>{console.log(callback)}); 


//NIVEL 2; EJERCICIO 1

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

let getEmployee = (id) => {

    return new Promise((resolve, reject) => {
        let employeEncont = employees.find(employee => employee.id === id);

        if (!employeEncont){
            reject("El id no existe");
        } else {
            resolve(employeEncont);
        }

    })
}

getEmployee(2).then(res =>{
    console.log(res);
}).catch(error =>{
    console.log(error);
});



//NIVEL 2; EJERCICI 2 Y EJERCICI 3
//NIVEL 3; EJERCICI 1

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

getEmployee(1)
    .then(respuesta => getSalary(respuesta))
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))
