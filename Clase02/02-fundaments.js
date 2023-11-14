/*
const user = {
    name: "David",
    ciudad: "Quito",
    activo: true,
    address: {
        calle: "Calle abc",
        secundaria: "Calle 123"
    },
    edad: 20,
    friends: ["David", "Cristina", "Martin"],
    sendMail(){
        return `Send mail ${this.friends[0]}`
    },
    sendNotificacion : function(){ // Funcion anonima
        return `Send notification ${this.friends[2]}`
    }
}

console.log(user.ciudad)
console.log(user.edad)
console.log(user.sendMail())
console.log(user.sendNotificacion())
console.log(user.address.secundaria)

delete user.friends // Eliminar un elemento del objeto
console.log(user)

const{name, edad, friends, activo} = user // Desustructuracion de objetos
console.log(name)
*/

const user = {
    name: "David",
    ciudad: "Quito",
    activo: true
}

const address = {
    calle: "Principal 123",
    secundaria: "abc-789"
}

const{name, ciudad, activo} = user
console.log(name, ciudad, activo)

const allInformation = {...user,...address}  // Juntar dos objetos en uno solo // Los spread operator se usa en argumentos (....) // Los Parametros Rest se usan en funciones ...args

console.log(allInformation)

const nombre = "Laptop"
const price = 5000

const newproduct = {
    nombre,  // Regla dictaminada por (ES6) y nombrada como: Nombres abreviados de propiedades 
    price
}

console.log(newproduct)

