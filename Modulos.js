console.log("-----  Modulos  -----")

console.log("\n***  CommonJS  ***")

// Archivo modulo.js

function saludar(nombre) {
    return `¡Hola, ${nombre}!`
}

module.exports = saludar;

// Archivo main.js

const saludar = require('./modulo')

const mensajeSaludo = saludar('David')
console.log(mensajeSaludo)

console.log("\n***  CommonJS  ***")

// Archivo modulo.js

export function saludo(nombre) {
    return `¡Hola, ${nombre}!`;
}

// Archivo main.js

import saludar from './modulo.js';

const saludo = saludo('Alejandro');
console.log(mensajeSaludo);

