/*NIVEL 1;
Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions*/

const calyEmple = require("./app.js")


test('sumar 1 + 2 es igual a 3', () => {
    expect(calyEmple.suma(1, 2)).toBe(3);
});

test('restar 2 - 1 es igual a 1', () => {
    expect(calyEmple.resta(2, 1)).toBe(1);
});

test('multiplicar 1 * 2 es igual a 2', () => {
  expect(calyEmple.multiplicar(1, 2)).toBe(2);
});

test('dividir 2 / 1 es igual a 2', () => {
  expect(calyEmple.dividir(2, 1)).toBe(2);
});

/*NIVEL 1;
Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1*/

test('test nivell 1 getEmpleado con id:2 deberia retornar bill gates', () => {
  return calyEmple.getEmployee(2).then(data => {
      expect(data).toEqual({ id: 2, name: 'Bill Gates'})
      })
  }
)

test("test nivell 1 getSalario con { id: 2, name: 'Bill Gates'} deberia retornar 1000",()=>{
  return calyEmple.getSalary({ id: 2, name: 'Bill Gates'}).then(data => {
      expect(data.salary).toBe(1000)
      })
  }
)

/*Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1*/

test('test debe retornar id:2, name: Bill Gates después de 2 segundos"', async () => {
  await calyEmple.getEmployee(2).then(data=>{
      expect(data).toEqual({ id: 2, name: 'Bill Gates'})
  })
})

/*Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3*/

test('es dona la id:2 a getEmpleado que retorna un objecte que es rebut per getSalario, i ens retorna 1000', ()=>{
  return calyEmple.getEmployee(2).then(obj => calyEmple.getSalary(obj)).then( data =>{
      expect(data.salary).toBe(1000)
  })
})

/*Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.*/

/*NIVEL 2;
Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2*/
const Persona = require('./clase.js')
jest.mock('./clase.js')

test('prueba que una instancia a la clase persona ha llamado a la respectiva clase',()=>{
  const person1 = new Persona()
  expect(Persona).toHaveBeenCalledTimes(1)
})

test('prueba que se llama correctamente el metodo "decirNombre" de la instancia',()=>{
  const person2 = new Persona()
  person2.dirNom()
  const mockPersonaInstance = Persona.mock.instances[1]
  const mockdirNom = mockPersonaInstance.dirNom
  expect(mockdirNom).toHaveBeenCalledTimes(1)
})

/*Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1*/

/*NIVEL 3;
Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.*/

const pe = require('./functEmple_json.js')
jest.mock('./empleadoYsalario.json',()=>({
    employees : [
        {
            id: 1,
            name: 'Linux Torvalds'
        }, {
            id: 2,
            name: 'Bill Gates'
        },{
            id: 3,
            name: 'Jeff Bezos'
        }],
    salaries : [
        {
            id: 1,
            salary: 4000
        }, {
            id: 2,
            salary: 1000
        }, {
            id: 3,
            salary: 2000
        }]
    })
)


test('prueba de consumo de archivo JSON con getEmpleado',()=>{
    
    return pe.getEmployee(2).then(data => {
        expect(data).toEqual({ id: 2, name: 'Bill Gates'})
        })
})
it('prueba de consumo de archivo JSON con getSalario',()=>{

    return pe.getSalary({ id: 2, name: 'Bill Gates'}).then(data=>{
        expect(data.salary).toBe(1000)
    })
})

