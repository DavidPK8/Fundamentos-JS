// Variables
console.log("-----  Variables  -----")

console.log("***  Var  ***")
var nombre = "Juan"
console.log(nombre)

console.log("\n***  Let  ***")
let clics = 0
clics = clics + 1
console.log(clics)

console.log("\n***  Const  ***")
const maximoIntentos = 3;
console.log("Número máximo de intentos:", maximoIntentos);

// Strings
console.log("\n-----  Strings  -----")

console.log("***  Metodos  ***")
var frase = "    Hola mundo   "
console.log(`Frase: ${frase}`)
console.log(`Longitud de la cadena: ${frase.length}`)
console.log(`Incluye la palabra 'Hola': ${frase.includes("Hola")}`)
console.log(`Mayúsculas: ${frase.toUpperCase()}`)
console.log(`Minúsculas: ${frase.toLowerCase()}`)
console.log(`Sin espacios en blanco: ${frase.trim()}`)
console.log(`Reemplazado: ${frase.replace("mundo", "me llamo David")}`)
console.log(`Subcadena: ${frase.slice(5, 9)}`)
console.log(`Subcadena (substring): ${frase.substring(5, 9)}`)
console.log(`Carácter en la posición 2: ${frase.charAt(2)}`)
console.log(`Repetido tres veces: ${frase.repeat(3)}`)
console.log(`Palabras: ${frase.split(" ")}`)

// Numeros
console.log("\n-----  Numeros  -----")

console.log("***  Orden de Presencia  ***")
var resultado = (3 + 4) * 2 / 2 - 1
console.log(resultado);

console.log("\n***  Conversion  ***")
var numero1 = 42
var numero2 = "26"
console.log(`La suma es: ${numero1 + +numero2}`)

// Booleanos
console.log("\n-----  Booleanos  -----")

console.log("***  Operador Ternario  ***")
var edad = 20
var mensaje = (edad >= 18) ? "Es mayor de edad" : "Es menor de edad"
console.log(mensaje);

// Condicionales
console.log("\n-----  Condicionales  -----")

console.log("***  If  ***")
var temperatura = 25
if (temperatura >= 30) {
  console.log("Hace mucho calor.")
} else {
  console.log("La temperatura es agradable.")
}

console.log("\n***  Switch  ***")
var diaDeLaSemana = 7
var nombreDia

switch (diaDeLaSemana) {
  case 1:
    nombreDia = "Lunes"
    break
  case 2:
    nombreDia = "Martes"
    break
  case 3:
    nombreDia = "Miércoles"
    break
  case 4:
    nombreDia = "Jueves"
    break
  case 5:
    nombreDia = "Viernes"
    break
  case 6:
    nombreDia = "Sábado"
    break
  case 7:
    nombreDia = "Domingo"
    break
  default:
    nombreDia = "Día no válido"
}
console.log("Hoy es " + nombreDia)

// Bucles
console.log("\n-----  Bucles  -----")

console.log("\n***  forEach  ***")
var frutas = ['Manzana', 'Banana', 'Cereza']
frutas.forEach(function(fruta) {
  console.log(fruta)
})

console.log("\n***  forOf  ***")
var colores = ['Rojo', 'Verde', 'Azul']
for (const color of colores) {
  console.log(color)
}

console.log("\n***  forIn  ***")
var numeros = [1, 2, 3];
for (const indice in numeros) {
  console.log(numeros[indice])
}

console.log("\n***  Map  ***")
var numeros = [1, 2, 3]
var duplicados = numeros.map(function(numero) {
  return numero * 2
})
console.log(duplicados);

// Funciones
console.log("\n-----  Funciones -----")

console.log("\n***  Funcion sin Parametros  ***")
function saludar() {
    console.log("Hola, me llamo David");
}
  
saludar();

console.log("\n***  Funcion Anonima  ***")
var multiplicar = function(a, b) {
    return a * b
}

var resultado = multiplicar(4, 6);
console.log("El resultado de la multiplicación es:", resultado)

console.log("\n***  Funcion con Parametros  ***")
function suma(a, b) {
    return a + b
}
  
var resultado = suma(3, 5)
console.log("El resultado de la suma es:", resultado)

console.log("\n***  Parametros Default  ***")
function saludar(nombre = "Usuario", edad = 30) {
    console.log(`Hola ${nombre}, Tienes ${edad} años`)
}
  
saludar("David", 20)

console.log("\n***  Parametros Rest  ***")
function sumar(...numeros) {
    let resultado = 0
  
    for (let numero of numeros) {
      resultado += numero
    }
  
    return resultado
}
console.log(sumar(2, 3, 5))
console.log(sumar(1, 2, 3, 4, 5))
console.log(sumar(10))
console.log(sumar())

console.log("\n***  Funcion Flecha  ***")
const calcularCuadrado = numero => numero * numero;
const funcionFlecha = calcularCuadrado(5);
console.log("El cuadrado de 5 es:", funcionFlecha)

console.log("\n***  Funcion con This  ***")
var persona = {
    nombre: "David",
    edad: 20,
    saludar: function() {
      console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`);
    }
}
persona.saludar()