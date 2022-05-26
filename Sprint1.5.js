let fs = require('fs');
const zlib = require('zlib');


//NIVEL 1; EJERCICIO 1;

function intervalo(){
    setInterval(() => {
        console.log(`Buenos días!`);
     
    }, 1000);
    }
    


//EJERCICIO 2: (ver Fs el write) no hay que instalar


const frase = `Que tengas un buen día`;

function textoFichero(){
    fs.writeFile('nodo.txt', frase, function (err) {
        if (err) return console.log(err);
        
      });
}

  
//EJERCICIO 3; (ver Fs el reading) no hay que instalar


function leerFichero(){
fs.readFile('nodo.txt', {encoding: `utf8`}, function (err,frase) {
    if (err) {
        console.log(err);
    } else {
    console.log(frase);
    }
  });
}




//NIVEL 2; EJERCICIO 1 ( zlib) no hay que instalar


function archivoComprimido(){
const gzip = zlib.createGzip();

const input = fs.createReadStream('nodo.txt');
const out = fs.createWriteStream('nodo.txt.gz');

input.pipe(gzip).pipe(out);

}

archivoComprimido();



//NIVEL 2; EJERCICIO 2

const exec = require('child_process').exec

function directorioUsuario(){

    exec(`dir`, (err, stdout) =>{
        if(err){
            console.log(`Se ha producido un error`);
        }

        console.log(`Comando ejecutado`);
        console.log(stdout);

    });
}

directorioUsuario();


//NIVEL 3; EJERCICI 1

// probando....

function codigoHexBase64(file_inicial){
    input_hex = fs.createReadStream(file_inicial,{encoding:'hex'}),
    input_b64 = fs.createReadStream(file_inicial,{encoding:'base64'}),
    output_hex = fs.createWriteStream('output_hex.txt'),
    output_b64 = fs.createWriteStream('output_b64.txt')
    
    stream.pipeline(input_hex,output_hex,(err)=>{ 
        if (err) throw err
        console.log('Realizado Hex')
    })
    stream.pipeline(input_b64,output_b64,(err)=>{ 
        if(err) throw err
        console.log('Realizado B64')
    })
    }
    codigoHexBase64('nodo.txt');

    


    