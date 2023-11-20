console.log("-----  Objetos  -----")
var persona = {
    nombre: 'David',
    edad: 20,
    ciudad: 'Quito',
    ocupacion: 'Desarrollador de Software'
};

console.log('Nombre:', persona.nombre)
console.log('Edad:', persona.edad)

console.log("\n***  Destructuracion de Objetos  ***")
const { nombre, edad, ciudad, ocupacion } = persona;

console.log('Nombre:', nombre)
console.log('Edad:', edad)
console.log('Ciudad:', ciudad)
console.log('Ocupación:', ocupacion)

console.log("\n***  Congelacion de Objetos  ***")
Object.freeze(persona)
persona.nombre = 'Juan'

console.log(persona)

console.log("\n***  Copia de Objetos  ***")
const personaCopia = { ...persona }
personaCopia.edad = 31

console.log('Original:', persona)
console.log('Copia:', personaCopia)

console.log("\n***  This en Objetos  ***")
const coche = {
    marca: 'Toyota',
    modelo: 'Camry',
    año: 2022,
  
obtenerInformacion: function() {
      return 'Marca: ' + this.marca + ', Modelo: ' + this.modelo + ', Año: ' + this.año
    }
}
  
const informacionCoche = coche.obtenerInformacion()
console.log(informacionCoche)

console.log("\n***  Metodos  ***")
const frutas = {
    manzana: 'roja',
    plátano: 'amarillo',
    uva: 'morada'
  }
  
console.log(`Claves: ${Object.keys(frutas)}`)
console.log(`Valores: ${Object.values(frutas)}`)
console.log(`Entradas: ${Object.entries(frutas)}`)

console.log("\n***  Nombres Abreviados  ***")
const manzana ="roja"
const precio = 1

const nuevaFruta = {
    manzana,
    precio
}

console.log(nuevaFruta);