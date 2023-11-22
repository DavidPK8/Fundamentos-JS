console.log("-----  Api  -----")

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

async function obtenerDatosDeAPI() {
    try {
        const respuesta = await fetch(apiUrl);

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status}`);
        }

        const datos = await respuesta.json()

        console.log('Datos de la API:', datos)
    } catch (error) {
        console.error('Error al obtener datos de la API:', error.message);
    }
}

obtenerDatosDeAPI()

console.log("\n***  Local Storage  ***")

console.log("\n***  Guardar un Objeto en el LocalStorage  ***")

const usuario = {
    nombre: 'John',
    edad: 30,
    ciudad: 'EjemploCity'
}

localStorage.setItem('usuario', JSON.stringify(usuario)) 

console.log("\n***  Obtener un Objeto en el LocalStorage  ***")

const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

if (usuarioGuardado) { 
    console.log('Objeto obtenido del localStorage:', usuarioGuardado);
} else {
    console.log('No se encontró ningún objeto en el localStorage.');
}

console.log("\n***  Eliminar un Objeto en el LocalStorage  ***")

localStorage.removeItem('usuario');
