console.log("-----  Asincronismo  -----")

console.log("Inicio del programa")

setTimeout(function() {
    console.log("Este mensaje se muestra después de 2000 milisegundos (2 segundos).")
}, 2000)

console.log("Fin del programa")

console.log("\n***  Codigo Sincrono vs Codigo Asincrono  ***")

console.log("\n***  Codigo Sincrono  ***")

const fs = require('fs')

console.log("Inicio del programa")

// Lectura de un archivo de forma síncrona
try {
    const contenido = fs.readFileSync('ejemplo.txt', 'utf-8')
    console.log("Contenido del archivo:", contenido)
} catch (error) {
    console.error("Error al leer el archivo:", error.message)
}

console.log("Fin del programa")

console.log("\n***  Codigo Asincrono  ***")

const fs = require('fs')

console.log("Inicio del programa");

fs.readFile('ejemplo.txt', 'utf-8', function (error, contenido) {
    if (error) {
        console.error("Error al leer el archivo:", error.message)
    } else {
        console.log("Contenido del archivo:", contenido)
    }
})

console.log("Fin del programa");

console.log("\n***  Promesas  ***")

// La funcion devuelve una promesa
function ejemploPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; 
            if (exito) {
                resolve("¡La operación fue exitosa!"); 
            } else {
                reject(new Error("Hubo un error en la operación.")); 
            }
        }, 2000); 
    });
}

console.log("\n***  Async - Await  ***")

async function Operacion() {
    console.log("Inicio del programa");

    try {
        const resultado = await operacionAsincrona();
        console.log("Éxito:", resultado);
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("Fin del programa");
    }
}