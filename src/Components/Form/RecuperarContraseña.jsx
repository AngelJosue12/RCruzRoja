import './RecuperarContraseña.css'
import React , { useState, useEffect }from 'react'
import { Link } from 'react-router-dom';
import { useLocation  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FcSms } from "react-icons/fc";
import StepperControl from '../MultiForm/StepperControl';
import Stepper from '../MultiForm/Stepper'
import Acount from '../MultiForm/Steps/Acount'
import Details from '../MultiForm/Steps/Details'
import Final from '../MultiForm/Steps/Final'
import { Button, message } from 'antd';
import Confirm from '../MultiForm/Steps/Confirm'
import { StepperContext } from '../MultiForm/contexts/StepperContext';
import { useAuth } from '../Contexts/AuthContexts';
import '@tailwindcss/forms'


export default function RecuperarContraseña() {

  const { token, setToken } = useAuth();


  const [messageApi, contextHolder] = message.useMessage();

 
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get('email');


    
  // Spter COnfig 
    const [currentStep, setCurrentStep]=useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData]= useState([]);
    const [ValidToken, setIsValidToken] = useState(false)

    const steps=[
      "Proceso de Recuperación de Contraseña",
      "Ingreso del Token",
      "Actualización de la Contraseña",
      "Final"          
    ];

    const displayStep=(step)=>{
      switch(step){
        case 1:
          return <Acount/>
        case 2:
          return <Details/>
          case 3:
          return <Confirm/>
        case 4:
          return <Final/>
        default:
      }
    }

const handleClick = async (direction) => {
  const requestBody = {
    correo: email
  };

  if (currentStep === 1 && direction === 'Siguiente') {
    fetch(`http://localhost:3000/recuperacionCorreo/${encodeURIComponent(email)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody),
      credentials: 'include'
    })
    .then(response => response.json())
    .then(result => {
      if (result.mensaje === "Correo de recuperación enviado correctamente") {
        console.log('exito enviado correo');
        let newStep = currentStep + 1;
        setCurrentStep(newStep);
      }
    })
    .catch(error => {
      console.error('Error al enviar:', error);
      message.error('Error al enviar. Por favor, intenta de nuevo más tarde.');
    });
  }
  
  if (currentStep === 2 && direction === 'Siguiente') {
    
  
    const tokenIsValid = await verifyToken(); 
    if (token == null) {
      message.error('El campo no puede estar vacío');}// Esperar a que verifyToken termine
    if (!tokenIsValid) {
      return; // No avanzar si el token no es válido
    }
    
    
  }

  let newStep = currentStep;
  direction === 'Siguiente' ? newStep++ : newStep--;

  newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
}

const verifyToken = async () => {
  if (token == null) {
    console.log('El campo no puede estar vacío');
    return false;
  } else {
    const requestBody = {
      correo: email,
      tokenUsuario: token
    };
    try {
      const response = await fetch(`http://localhost:3000/compararToken/${encodeURIComponent(email)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody),
        credentials: 'include'
      });
      const result = await response.json();
      if (result.mensaje === "El token de recuperación es válido") {
        console.log('exito token correcto');
        const isSuccess = await success(); // Espera a que se resuelva la promesa de success
        return isSuccess;
       
      } else if (result.mensaje === "El token de recuperación es inválido") {
        message.error('El token de recuperación es inválido.');
        return false;
      }
    } catch (error) {
      console.error('Error al enviar:', error);
      message.error('El token de recuperación es inválido.');
      return false;
    }
  }
};

const success = async () => {
  message.loading({ content: 'Verificando..', duration: 2 });
  return new Promise((resolve) => {
    setTimeout(() => {
      message.success({ content: 'Correcto', duration: 1.3 });
      resolve(true); // Resuelve la promesa con true después de que se complete la animación
    }, 1700); // Ajusta este valor según sea necesario
  });
};



    
    return (
      <div className="md:w-2/3 mx-auto my-20 shadow-2xl rounded-3xl pb-2 bg-white mt-10  border-300 ">
      {/*Spetter */}
      <div className="container horizontal mt-5 ">
        <Stepper
          steps={steps}
          currentStep={currentStep}
        />
         {/*Dsiplay Components */}  
         <div className="my-10 p-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
         </div>
      </div>
        {/*SpetterControl */}                
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps= {steps}
      />
      <br />
    </div>
      );
}
