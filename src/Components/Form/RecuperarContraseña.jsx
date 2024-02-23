
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
import MultiForm from '../MultiForm/MultiForm';
import Stepper from '../MultiForm/Stepper';
import StepperControl from '../MultiForm/StepperControl';


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
      <div className="md:w-1/2 mx-auto shadow-xl  rounded-2xl pb-2 bg-white">
      {/*Spetter */}
      <div className="container horizontal mt-5">
      <Stepper/>
      </div>
      {/*SpetterControl */}
      <StepperControl/>
    </div>
      );
    
}
