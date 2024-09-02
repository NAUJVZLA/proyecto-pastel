
import axios from 'axios';

const API_URL = 'http://localhost:3000/users'; // URL del JSON Server

export async function LoginV(email: string, password: string): Promise<boolean> {
    try {
        // Simulamos un retraso en la autenticación para imitar un tiempo de respuesta real
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Hacer una solicitud GET para obtener todos los usuarios
        const response = await axios.get(API_URL, {
            params: { email } // Filtrar usuarios por email
        });

        // Buscar si existe un usuario con el correo electrónico y contraseña proporcionados
        const user = response.data.find((user: { email: string, password: string }) =>
            user.email === email && user.password === password
        );

        // Si encontramos el usuario, la autenticación es exitosa
        if (user) {
            return true; // Autenticación exitosa
        } else {
            return false; // Credenciales incorrectas
        }
    } catch (error) {
        console.error('Error al autenticar al usuario:', error);
        return false; // Error en la autenticación
    }
}
