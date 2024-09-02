import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { register } from '@/lib/auth/variable-auth-register '; // Importa la función de registro
import { ModalHeader } from '@nextui-org/react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const success = await register(email, password);
            if (success) {
                alert('Registro exitoso');
                // Puedes redirigir a otra página o limpiar los campos aquí
            } else {
                setError('Error en el registro. Inténtalo de nuevooo.');
            }
        } catch (err) {
            setError('Error en el registro. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <ModalHeader className="flex flex-col gap-2">  <Button type="submit" disabled={loading}>
                    {loading ? 'Registrando...' : 'Registrar'}
                </Button> </ModalHeader>
            </form>
        </div>
    );
}
