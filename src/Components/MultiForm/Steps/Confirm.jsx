import React, { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { NivelSeguridad } from '../../NivelSeguridad/NivelSeguridad';

export default function Confirm() {
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [passwordError2, setPasswordError2] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const validatePassword = (password) => {
    if (password === '') {
      setPasswordError('La contraseña no puede estar vacía');
      return false;
    } else if (password.length < 8) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const validatePassword2 = (password2) => {
    if (password2 === password) {
      setPasswordError2('');
      return true;
    } else {
      setPasswordError2('Las contraseñas no coinciden');
      return false;
    }
  };

  return (
    <div>
      <br />
      <div className="sm:col-span-3">
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
          Contraseña
        </label>
        <div className="mt-2 relative rounded-md shadow-sm">
          <input 
            type={showPassword ? 'text' : 'password'}
            required
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validatePassword(password)}
            autoComplete="password" 
            className={`block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo sm:text-sm sm:leading-6 ${passwordError ? 'input-error' : ''}`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEyeSlash className="h-5 w-5" aria-hidden="true" />
            ) : (
              <IoEyeSharp className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}
        <NivelSeguridad password={password}/>
      </div>
      <br /><br />

      <div className="sm:col-span-3">
        <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
          Confirmar Contraseña
        </label>
        <div className="mt-2 relative rounded-md shadow-sm">
          <input 
            type={showPassword2 ? 'text' : 'password'}
            required
            id="password2"
            name="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            onBlur={() => validatePassword2(password2)}
            autoComplete="password2" 
            className={`p-2 pl-3 pr-10 block w-full rounded-md border-0 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo sm:text-sm sm:leading-6 ${passwordError2 ? 'input-error' : ''}`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
            onClick={togglePasswordVisibility2}
          >
            {showPassword2 ? (
              <FaEyeSlash className="h-5 w-5" aria-hidden="true" />
            ) : (
              <IoEyeSharp className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        {passwordError2 && <p className="error-message">{passwordError2}</p>}
      </div>
    </div>
  );
}
