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

module.exports= {
    getEmployee,
    getSalary
}