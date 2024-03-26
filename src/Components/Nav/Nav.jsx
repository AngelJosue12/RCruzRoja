import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from '../Contexts/AuthContexts'; 
import { navLinks, authLinks } from '../../Data/Data';
import { LuLogOut } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
import { jwtDecode } from 'jwt-decode';
import { Avatar, Badge, Space, message } from 'antd';
import './Nav.css'; // Importa tus estilos personalizados aquí

export default function Nav() {
  const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [userName, setUserName] = useState(null);
  const [avatarColor, setAvatarColor] = useState(null);

  const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
  };

  useEffect(() => {
    const token = getCookie('jwt');

    if (token) {
      try {
        fetch('http://localhost:3000/verifyToken', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ token }),
          credentials: 'include'
        })
        .then(response => response.json())
        .then(result => {
          if (result.mensaje === "Token válido") {
            const decodedToken = jwtDecode(token);
            setIsAuthenticated(decodedToken.IsAuthenticated);
            setUserName(decodedToken.nombre);

            // Retrieve avatar color from localStorage if available, otherwise generate a new color
            const storedColor = localStorage.getItem('avatarColor');
            const color = storedColor ? storedColor : getRandomColor();
            setAvatarColor(color);
            // Store the color in localStorage
            localStorage.setItem('avatarColor', color);
          } else {
            setIsAuthenticated(false);
          }
        })
        .catch(error => {
          console.error('Error al verificar el token:', error);
          setIsAuthenticated(false);
        });
      } catch (error) {
        console.error('Error al decodificar el token JWT:', error);
        setIsAuthenticated(false);
      }
    }
  }, [setIsAuthenticated]);
  
  
  const handleLogout = () => {
    message.loading('Cerrando Sesión', 1.5) // Establece la duración del mensaje de carga en 1.5 segundos
      .then(() => {
        setIsAuthenticated(false);
        // Elimina la cookie del token JWT
        document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
 
      });

      setTimeout(() => {
        navigate('/');
      }, 20000); 
  };

  // Función para obtener un color aleatorio
  const getRandomColor = () => {
    const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    const randomIndex = Math.floor(Math.random() * colorList.length);
    return colorList[randomIndex];
  };

  return (
    <nav className='navShadow'>
      <div className='container nav-container'>
        <Link to={'/'} className='logo'>
          <img src={Logo} alt='Logo'/>
        </Link>
        <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`}>
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                <item.icon className='icon-navs'/>
                <span className='name-navs'>{item.name}</span>
              </NavLink>
            </li>
          ))}
          {isAuthenticated ? (
            <>
              <li>
                <NavLink to="/Perfil" className={({ isActive }) => isActive ? 'active' : ''}>
                <Badge dot>
                  <Avatar 
                   // Clase CSS para centrar el Avatar
                    style={{ 
                      backgroundColor: avatarColor, 
                      verticalAlign: 'middle', 
                      fontSize: '4px', // Ajustar el tamaño de la letra
                      lineHeight: '2px', // Ajustar la altura de línea para centrar verticalmente la letra
                      display: 'flex', // Establecer el contenedor como flex
                      alignItems: 'center', // Centrar verticalmente los elementos dentro del contenedor
                      justifyContent: 'center',  // Establecer la altura del Avatar
                      borderRadius: '50%',
                     // Hacer que el Avatar sea un círculo
                    }}
                    size={25} // Reducir el tamaño del Avatar
                  >
                   <div  className='nombreAvatar' style={{ 

                      backgroundColor: avatarColor, 
                      verticalAlign: 'middle',
                      fontSize: '16px', // Ajustar el tamaño de la letra
                      lineHeight: '2px', // Ajustar la altura de línea para centrar verticalmente la letra
                      display: 'flex', // Establecer el contenedor como flex
                      alignItems: 'center', // Centrar verticalmente los elementos dentro del contenedor
                      justifyContent: 'center',  // Establecer la altura del Avatar
                      borderRadius: '50%',
                      marginLeft: '-21px', // Posicionar el
                     // Hacer que el Avatar sea un círculo
                    }}>{userName && userName[0]}</div>  {/* Muestra la primera letra del nombre */}
                  </Avatar>
                  </Badge>
                  <span className='name-navs'>Perfil</span>
                </NavLink>
              </li>
              <li>
                {/* Utiliza Tailwind CSS para aplicar estilos al botón y mostrar el mensaje emergente */}
                <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : ''}>
                <button 
                  onClick={handleLogout} 
                  className="hover:text-red-800 focus:outline-none relative group {({ isActive }) => isActive ? 'active' : ''}"
                >
                  <LuLogOut className="text-xl relative icon-navs"/>
                  <span className="name-navs absolute top-full left-1/2 transform -translate-x-1/2 bg-red-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Cerrar sesión
                  </span>
                </button>
                </NavLink>
              </li>
            </>
          ) : (
            authLinks.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path} className={({ isActive }) => isActive ? 'active' : ''}>
                  <item.icon className='icon-navs'/>
                  <span className='name-navs'>{item.name}</span>
                </NavLink>
              </li>
            ))
          )}
        </ul>
        <button className='menu-button' onClick={() => setIsNavLinksShowing(!isNavLinksShowing)}>
          {!isNavLinksShowing ? <FiMenu /> : <IoCloseSharp />}
        </button>
      </div>
    </nav>
  );
}
