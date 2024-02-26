
import'./Form.css'
import React , { useState, useRef}from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Registrer from '../../Pages/User/Registrer/Registrer';
import LoginImg from '../../assets/img/p3.png'
import LoginImg2 from '../../assets/img/logo.png'
import '@tailwindcss/forms'
import ReCAPTCHA from "react-google-recaptcha";




export default function Form() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const captcha = useRef(null); 

  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const captchaValue = captcha.current.getValue();

      if (!captchaValue) {
        message.error('Por favor, realiza el captcha');
        return;
      }


        // Validar campos antes de enviar el formulario
        if (validateEmail(email) && validatePassword(password)) {
          const requestBody = {
            correo: email,
            contraseña: password
          };
    
          fetch("http://localhost:3000/user/authenticate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
          })
          .then(response => response.json())
          .then(result => {
            if (result.mensaje ==="Autenticación exitosa" ) {
              message.loading('Cargando', 2);
              setTimeout(() => {
                message.success('Autentificacion Exitosa', 2);
                navigate('/');
              }, 2000);
            } else {
              // Autenticación fallida
              message.error(result.mensaje);
            }
          })
          .catch(error => {
            console.error('Error al autenticar:', error);
            message.error('Error al autenticar. Por favor, intenta de nuevo más tarde.');
          });
        } else {
          console.log('Formulario no válido');
        }
      };



     const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(email == ('')){
        setEmailError ('No puede estar vacio')
      }else if (emailRegex.test(email)) {
        setEmailError('');
        return true;
      } else {
        setEmailError('Correo electrónico no válido');
        return false;
      }
    };
  
    const validatePassword = (password) => {
      // Agrega tus criterios de validación de contraseña aquí
      if(password == ('')){
        setPasswordError ('No puede estar vacio')
      }else if (password.length >= 8) {
        setPasswordError('');
        return true;
      } else {
        setPasswordError('La contraseña debe tener al menos 8 caracteres');
        return false;
      }
    };
   

    const handleChangeCaptcha = () => {
      const captchaValue = captcha.current.getValue();
      if (captchaValue) {
        console.log("exito")
      }
    };


    


    return (
        <div className="container2" id="container">
          
          <div className="form-container sign-in" >
            <form onSubmit={handleSubmit} >
              

              <h2 className='title-form'>Inicio de Sesion</h2>
              <div className="social-icons">
                
                <a href="#" className="icon">
                  <i className="fa-brands fa-facebook-f"><FaFacebookF /></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-github"><FaGithub /></i>
                </a>
                <a href="#" className="icon">
                  <i className="fa-brands fa-linkedin-in"><FaLinkedinIn /></i>
                </a>
              </div>
    
              <span>Introduce tu Correo y Contraseña</span>
                
              <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo</label>
              <div className="mt-3">
                <input  
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => validateEmail(email)}
                  required type="email" autoComplete="email" className=" {emailError ? 'input-error' : ''}   block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                 
              </div>
              {emailError && <p className="error-message">{emailError}</p>}
            </div>

            <div className="sm:col-span-4">
    <label htmlFor ="email" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
    <div className="mt-3">
      <input id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validatePassword(password)}
          type="password" autoComplete="password" className="{passwordError ? 'input-error' : ''}  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            
    </div>
    {passwordError && <p className="error-message">{passwordError}</p>}
  </div>
              
              <div className='cont-remen'>
                <input  type="checkbox" id='remember' />
                <label className='text-sm text-slate-700  grid grid-cols-1 gap-1 ms-8 center' htmlFor="remember">Recordarme por 30 dias</label>
               </div>
               <div className='cont-remen'>
               <ReCAPTCHA
                  ref={captcha}
                  sitekey="6Le7_38pAAAAAGL9nCevqF8KzHl6qzULlBArgfMb"
                  onChange={handleChangeCaptcha}
                />
               </div>
              <Link to={'/Recuperacion'} >
              Olvidaste tu Contraseña?
              </Link>
              <button type="submit" >Sign In</button>
              <button className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 btn-google'>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                                <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                                <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                                <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                            </svg>
            Inicia Sesion con Google
            
          </button>
          <div className='cont-remen2'>
          <p className=''>No tienes una Cuenta?</p>
          <Link to={'/Registro'} >
            Registrate
          </Link>
        </div>
           <img src={LoginImg} className='img-login' alt="" />
           <div className="feature-border container"></div>
           <h4 className='title-form2'>Juntos Hacemos la Diferiencia</h4>
           <img src={LoginImg2} className='img-login4' alt="" />
            </form>
            
            
        </div>
    
        </div>
      );
    
}
