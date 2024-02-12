import React from 'react'
import'./Form2.css'
import '@tailwindcss/forms'
import LoginImg from '../../assets/img/principal.png'
import LoginImg2 from '../../assets/img/logo.png'
import ReCAPTCHA from "react-google-recaptcha";

import { useState, useRef } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { message } from 'antd'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from '../../Pages/User/Login/Login'

export default function Form2() {


  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(true)
  const [agreed2, setAgreed2] = useState(true)

  
  const [nombre,setNombre]= useState('')
  const [ApellidoP,setApellidoP]= useState('')
  const [ApellidoM,setApellidoM]= useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  
  ///mensajes de error
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordError2, setPasswordError2] = useState('');
  const [telefonoError, setTelefonoError] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [apellidoMError, setApellidoMError] = useState('');
  const [apellidoPError, setApellidoPError] = useState('');
  const [fechaError, setFechaError] = useState('');
  const captcha = useRef(null); 

  
    const handleSubmit = (event) => {
      event.preventDefault();


      const captchaValue = captcha.current.getValue();

      if (!captchaValue) {
        message.error('Por favor, realiza el captcha');
        return;
      }


      const data = new FormData();
      data.append("Nombre", nombre);
      data.append("ApellidoPaterno", ApellidoP);
      data.append("ApellidoMaterno", ApellidoM);
      data.append("Correo", email);
      data.append("Telefono", telefono);
      data.append("Contrasena", password);
      data.append("FechaNacimiento", fechaNac);
      
      const formData = new FormData();
      formData.append("Correo", email);
      
  
      // Validar campos antes de enviar el formulario
      if (validateEmail(email)==true && validatePassword(password)==true && validatePassword2(password2) && validateApellidoM(ApellidoM)==true && validateApellidoP(ApellidoP)==true && validateNombre(nombre)==true && validateTelefono(telefono)==true && validateFecha(fechaNac)==true && !agreed || !agreed2 ) {
        
        const telefonoValido = validateTelefono(telefono);

        // Verificar si hay algún error en el campo de teléfono
        if (!telefonoValido) {
          // Si el teléfono no es válido, detener el envío del formulario
          return;
        }

        fetch(
          "http://localhost:3000/user/" +
            email,
          {
            method: "POST",
            credentials: 'include',
            body: formData,
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if(result.mensaje === 'Este correo ya está registrado'){
              message.warning('Este correo ya esta registrado');
            }else{
              fetch(
                "http://localhost:3000/user",
                {
                  method: "POST",
                  credentials: 'include',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    nombre: nombre,
                    apellido_Paterno: ApellidoP,
                    apellido_Materno: ApellidoM,
                    correo: email,
                    telefono: telefono,
                    contraseña: password,
                    fecha_Nacimiento: fechaNac,
                  }),
                }
              )
              .then((res) => res.json())
              .then((result) => {
                message.loading('Cargando', 2);
                setTimeout(() => {
                  message.success('Usuario registrado exitosamente', 2);
                  navigate('/Login');
                }, 2000);
              });
            }
          });  
        } else {
          message.info('Por favor lea y acepte nuestros terminos y condiciones y politicas de privacidad');
        }
    };


    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    //validaciones jsjsjjs
    const validateNombre =(nombre)=>{
      if(nombre==''){
       setNombreError('No puede estar vacio')
       return false;

      }else{
        if(nombre.length<2){
          setNombreError('minimo de 2 caracteres')
          return false;
        }else{
          const nombreRegex = /^[a-zA-Z\s]+$/;
          if (nombreRegex.test(nombre)){
            setNombreError('');
            return true;
          }
          else{
            setNombreError('No puede contener numeros');
            return false;
          }
        }
      }
      
    }
    const validateApellidoP =(ApellidoP)=>{
      const nombreRegex2 = /^[a-zA-Z\s]+$/;
      if(ApellidoP==''){
        setApellidoPError('No puede estar vacio')
        return false;
       }else{
         if(ApellidoP.length<5){
          setApellidoPError('minimo de 5 caracteres')
          return false;
         }else{
           const nombreRegex2 = /^[a-zA-Z\s]+$/;
           if (nombreRegex2.test(ApellidoP)){
            setApellidoPError('');
             return true;
           }
           else{
            setApellidoPError('No puede contener numeros');
             return false;
           }
         }
      }
    }
    const validateApellidoM =(ApellidoM)=>{
      const nombreRegex3 = /^[a-zA-Z\s]+$/;
      if(ApellidoM==''){
        setApellidoMError('No puede estar vacio')
        return false;
       }else{
         if(ApellidoM.length<5){
          setApellidoMError('minimo de 5 caracteres')
          return false;
         }else{
           const nombreRegex3 = /^[a-zA-Z\s]+$/;
           if (nombreRegex3.test(ApellidoM)){
            setApellidoMError('');
             return true;
           }
           else{
            setApellidoMError('No puede contener numeros');
             return false;
           }
         }
      }
    }

    const validateEmail = (email) => {
     if(email==''){
      setEmailError('No puede estar vacio')
      return false;
     }else{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(email)) {
        setEmailError('');
        return true;
      } else {
        setEmailError('Correo electrónico no válido');
        return false;
      }
     }
    };

    function checkPasswordStrength(password, minChar, level) {
      const lowcase = /[a-z]/.test(password);
      const uppcase = /[A-Z]/.test(password);
      const numbers = /\d/.test(password);
      const special = /[^a-zA-Z\d]/.test(password);
    
      let passed = true;
      switch (level) {
        case 5:
          passed = passed && special;
        case 4:
          passed = passed && uppcase;
        case 3:
          passed = passed && numbers;
        case 2:
          passed = passed && lowcase;
        case 1:
          passed = passed && (lowcase || uppcase || numbers);
        case 0:
          passed = passed && password.length >= minChar;
          break;
        default:
          passed = false;
      }
      return passed;
    }
    
  
    const validatePassword = (password) => {
      if(password==''){
        setPasswordError('no puede estar vacio')
        return false;
      }else{
        if(password.length<8){
          setPasswordError('minimo de 8 caracteres');
          return false;
        }else{ 
          const passwordValidate= checkPasswordStrength(password,8,5);
          if(passwordValidate){
            setPasswordError('')
            return true;
          }else{
            setPasswordError('Debe tener almenos una mayuscula, minuscula, numero y caracter especial')
            return false;

          }
        }
      }
    };
    const validatePassword2=(password2)=>{
      if(password2==password){
        setPasswordError2('')
        return true;  

      }else{
        setPasswordError2('no son iguales las contraseñas')
        return false;
      }
    };
   
    const validateTelefono = (telefono) => {
      const telefonoRegex = /^[0-9]+$/;
      if (telefono === '') {
        setTelefonoError('El campo de teléfono no puede estar vacío');
        return false;
      } else if (!telefonoRegex.test(telefono)) {
        setTelefonoError('El teléfono solo puede contener números');
        return false;
      } else {
        setTelefonoError('');
        return true;
      }
    };
    

    const validateFecha=(fechaNac)=>{
      const fechaLimiteInferior = new Date('2002-01-01');
      const fechaActual = new Date();

      const fechaIngresada = new Date(fechaNac);
      if(fechaNac==('')){
        setFechaError('no puede estar vacio')
        return false;
      }else if (fechaIngresada < fechaLimiteInferior || fechaIngresada > fechaActual){
        setFechaError('La fecha no es valida');
        return false;
      }else{
        setFechaError('')
        return true;

      }
    };


    const handleChangeCaptcha = () => {
      const captchaValue = captcha.current.getValue();
      if (captchaValue) {
        console.log("exito")
      }
    };




    return (
        <div className="container3" id="container">
          
    
          <div className="form-container sign-in">
            <form onSubmit={handleSubmit}>
              <h1 className='title-form'>Resgistro</h1>
              <span>Registrate Con Diferentes Plataformas</span>
    
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
    
              <span>Rellena los Campos</span>
                
              <div className="border-b border-gray-900/10 pb-12">

<div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
<div className="sm:col-span-4">
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
    <div className="mt-2">
      <input  id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            onBlur={() => validateNombre(nombre)}
            required
           type="text" autoComplete="nombre" className=" {nombreError ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
           {nombreError && <p className="error-message">{nombreError}</p>}
    </div>
  </div>
  <div className="sm:col-span-3">
    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Apellido Paterno</label>
    <div className="mt-2">
      <input required
            id="apellidoP"
            name="apellidoP"
            value={ApellidoP}
            onChange={(e) => setApellidoP(e.target.value)}
            onBlur={() => validateApellidoP(ApellidoP)}
            type="text"  autoComplete="given-name" className="{apellidoPError ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            {apellidoPError && <p className="error-message">{apellidoPError}</p>}
    </div>
  </div>

  <div className="sm:col-span-3">
    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Apellido Materno</label>
    <div className="mt-2">
      <input type="text"  required
            id="apellidoM"
            name="apellidoM"
            value={ApellidoM}
            onChange={(e) => setApellidoM(e.target.value)}
            onBlur={() => validateApellidoM(ApellidoM)}
            autoComplete="family-name" className=" {apellidoMError ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            {apellidoMError && <p className="error-message">{apellidoMError}</p>}
    </div>
  </div>

  <div className="sm:col-span-3">
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Correo</label>
    <div className="mt-2">
      <input  required
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validateEmail(email)}
            type="email" autoComplete="email" className=" {emailError ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            {emailError && <p className="error-message">{emailError}</p>}
    </div>
  </div>

  <div className="sm:col-span-3">
    <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Fecha de Nacimiento</label>
    <div className="mt-2">
      <input  type="date"
            id="fecha"
            name="fecha"
            required
            value={fechaNac}
            onChange={(e) => setFechaNac(e.target.value)}
            onBlur={() => validateFecha(fechaNac)}
            min="10" max="100" step="1"  className="{fechaError ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    </div>
    {fechaError && <p className="error-message">{fechaError}</p>}
  </div>

  <div className="sm:col-span-4">
    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Telefono</label>
    <div className="mt-2">
    <input  
    type="tel"
    id="telefono"
    name="telefono"
    value={telefono}
    required
    onChange={(e) => setTelefono(e.target.value)}
    onBlur={() => validateTelefono(telefono)} // Aquí se llama a validateTelefono correctamente
    className="{telefonoError ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
    {telefonoError && <p className="error-message">{telefonoError}</p>}
    </div>
  </div>


  

  <div className="sm:col-span-3">
    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Contraseña</label>
    <div className="mt-2">
      <input type="password"
            required
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validatePassword(password)}
            autoComplete="password" className="{passwordError ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
             {passwordError && <p className="error-message">{passwordError}</p>}
    </div>
  </div>

  <div className="sm:col-span-3">
    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Confirmar Contraseña</label>
    <div className="mt-2">
      <input type="password"
            id="password2"
            name="password2"
            value={password2}
            required
            onChange={(e) => setPassword2(e.target.value)}
            onBlur={() => validatePassword2(password2)}
            autoComplete="password2" className="{passwordError2 ? 'input-error' : ''} block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            {passwordError2 && <p className="error-message">{passwordError2}</p>}
    </div>
  </div>
  

</div>
</div>
<br /><br />
<div className='cont-remen'>
               <ReCAPTCHA
                  ref={captcha}
                  sitekey="6LfXgm0pAAAAAA6yN5NyGT_RfPXZ_NLXu1eNoaQf"
                  onChange={handleChangeCaptcha}
                />
               </div>

<br />
   
<Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed} 
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-gray-200'  :  'bg-red-600',
                  'flex h-6 w-11 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Aceptar políticas</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-0' :  'translate-x-3.5',
                    'h-4 w-4 my-1 mx-1 transform  rounded-full bg-white shadow-sm ring-3 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              Acepta nuestra {' '}
              <a href="#" className="font-semibold text-indigo-600">
                Politica de&nbsp;<Link to={'/Politicas'} >Privacidad </Link> 
              </a>
              .
            </Switch.Label>
          </Switch.Group> <br />



          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed2}
                onChange={setAgreed2}
                className={classNames(
                  agreed2 ?'bg-gray-200'  :  'bg-red-600',
                  'flex h-6 w-11 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Acepta nuestos terminos y condiciones</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed2 ? 'translate-x-0' :  'translate-x-3.5',
                    'h-4 w-4 my-1 mx-1 transform  rounded-full bg-white shadow-sm ring-3 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              Acepta nuestros{' '}
              <a href="#" className="font-semibold text-red-600">
                &nbsp; <Link to={'/Terminos'} >Terminos y Condiciones </Link> 
              </a>
            </Switch.Label>
          </Switch.Group>
              <button className='button'type="submit" >Registrarse</button>
              <button className='flex items-center justify-center gap-2 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 rounded-xl text-gray-700 font-semibold text-lg border-2 border-gray-100 btn-google'>
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                                <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                                <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                                <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                            </svg>
            Registrarse con Google
            
          </button>
          <div className='cont-remen2'>
          <p className=''> Ya tienes una Cuenta,</p>
          <Link to={'/Login'} >
          Inicia Sesion
          </Link>
        </div>
        <img src={LoginImg} className='img-login2' alt="" />
           <h4 className='title-form3'>Juntos Hacemos la Diferiencia</h4>
           <img src={LoginImg2} className='img-login3' alt="" />
           
            </form>
            
        </div>
    
        </div>
        
      );
    
}
