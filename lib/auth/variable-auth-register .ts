// Importamos Axios para realizar solicitudes HTTP
import axios from 'axios';

// Configuramos la URL base del servidor JSON Server donde se almacenan los datos de usuarios
const API_URL = 'http://localhost:3000/users';

// La función `register` se encarga de crear un nuevo usuario en el servidor
export async function register(email: string, password: string): Promise<boolean> {
    try {
        // Enviamos una solicitud POST al servidor para agregar un nuevo usuario
        const response = await axios.post(API_URL, {
            // El cuerpo de la solicitud contiene los datos del nuevo usuario
            email,
            password
        });

        // Si la solicitud se realiza con éxito, el servidor devuelve una respuesta con el usuario creado
        console.log('Usuario registrado con éxito:', response.data);
        return true; // Registro exitoso
    } catch (error) {
        // Si ocurre un error durante la solicitud, lo capturamos y mostramos en la consola
        console.error('Error en el registro del usuario:', error);
        return false; // Registro fallido
    }
}
