import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/Contexts/AuthContexts';
import { message } from 'antd';

const ProtectorRutas = () => {
    const { user } = useAuth();
    const {isAuthenticated} = useAuth();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulando un tiempo de carga
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer); // Limpiar el temporizador en el desmontaje del componente
    }, []);

    if (loading) {
        message.loading({ content: 'Cargando...', key: 'loading' });
        return null; // No renderizar nada mientras se carga
    }

    if (!user) {
        // Si el usuario no está autenticado, redirige al usuario a la página de inicio de sesión
        message.error('Oops... Parece que no estás logueado, por favor hazlo');
        navigate('/login');
        return null; // No renderizar nada mientras se redirige
    }

    if (user.Rol === ADM ) {
        // Si el usuario tiene rol 1 o 2, permite el acceso a las rutas protegidas
        return <Outlet />;
    } else {
        // Si el usuario no tiene el rol adecuado, redirige y muestra un mensaje de error
        message.error('Oops... Parece que no eres administrador');
        navigate('/');
        return null; // No renderizar nada mientras se redirige
    }
};

export default ProtectorRutas;
