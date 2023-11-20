console.log("-----  Arreglos  -----")

const numeros = [1, 2, 3, 4, 5]

console.log('Primer elemento:', numeros[0]); 
console.log('Segundo elemento:', numeros[1]);

console.log("\n***  Recorrer un Arreglo  ***")
console.log('Elementos del arreglo:');
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

console.log("\n***  Metodos  ***")
let frutas = ['manzana', 'pera', 'uva'];
frutas.push('naranja');
console.log(frutas)
frutas.unshift('sandía')
console.log(frutas)
frutas.pop()
console.log(frutas)
frutas.shift()
console.log(frutas)
const copiaFrutas = frutas.slice(1, 3)
console.log(copiaFrutas)
const esArreglo = Array.isArray(frutas)
console.log(esArreglo)
const longitud = frutas.length
console.log(longitud)

console.log("\n***  Destructuracion de un Arreglo  ***")
const colores = ['rojo', 'verde', 'azul']
const [color1, color2, color3] = colores
console.log('Color 1:', color1)
console.log('Color 2:', color2)
console.log('Color 3:', color3)

console.log("\n***  Rest vs Spread  ***")

console.log("\n***  Rest  ***")
const frutass = ['manzana', 'pera', 'uva']
const nuevasFrutas = [...frutas, 'naranja']
console.log(nuevasFrutas)

console.log("\n***  Spread  ***")
const Verduras = ['Brocoli', 'Lechuga', 'Espinaca']
const newNames = [...frutass,...Verduras]
console.log(newNames);