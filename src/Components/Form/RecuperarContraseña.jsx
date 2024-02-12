
import'./RecuperarContraseña.css'
import React , { useState}from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FcSms } from "react-icons/fc";
import { message } from 'antd';


import '@tailwindcss/forms'

export default function RecuperarContraseña() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '') {
        setEmailError('No puede estar vacío');
      } else if (emailRegex.test(email)) {
        setEmailError('');
        return true;
      } else {
        setEmailError('Correo electrónico no válido');
        return false;
      }
    };
  
    const data = new FormData();
    data.append('Correo', email);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (validateEmail(email)) {
        fetch(
          '' +
            '' +
            email,
          {
            method: 'POST',
            body: data,
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result === 'Correo Existe. Token actualizado.') {
              // Navegar a la página Token con el correo como parámetro
              navigate(`/Token?correo=${email}`);
            } else if (result === 'No existe') {
               message.error('Ninguna cuenta esta asociada a este correo');
            }
          });
      } else {
        console.log('Formulario no válido');
      }
    };
 
  
    
    return (
        <div className="container4" id="container">
          
          <div className="form-container sign-in" >
            <form onSubmit={handleSubmit}>
              

              <h3 className='title-form'>Recuperar Contraseña</h3>
    
              <div className="social-icons">
                
                <a href="#" className="icon">
                  <i className="fa-brands fa-Whatsapp-f"><SiWhatsapp /></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-sms"><FcSms/></i>
                </a>
              </div>
    
              <span>Ingresa un correo </span>
              <span>para reestablecer la Contraseña</span>
                
              <div className="sm:col-span-6">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-1">
                <input  
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => validateEmail(email)}
                  required type="email" autoComplete="email" className="  {emailError ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                 
              </div>
            
            </div>

            
    
              <button type="submit" >Continuar</button>
             
          <div className='cont-remen2'>
        
          <Link to={'/Login'} >
            Regresar
          </Link>
        </div>
           
            </form>
            
            
        </div>
    
        </div>
      );
    
}
