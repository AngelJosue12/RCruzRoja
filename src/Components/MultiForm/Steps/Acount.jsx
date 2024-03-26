import React, {useEffect, useState, useRef}  from 'react'
import { useContext } from 'react'
import { StepperContext } from '../contexts/StepperContext'

export default function Acount() {
  const correoSoporte = "cruzrojasuport@gmail.com";

  return (
    <div className="flex flex-col">
      
      <center>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        {"  "}
        ¡Bienvenido al Proceso de Recuperación de Contraseña!
      </div>
      </center>
      
      <div className="bg-white my-2 p-3 rounded">
        <p style={{ fontSize: '0.75rem', lineHeight: '2.7' }}>
          Nos complace asistirte en la recuperación de tu contraseña. Para garantizar la seguridad de tu cuenta, hemos establecido un proceso seguro y confiable para que puedas recuperar el acceso a tu cuenta.
        </p>
        <p style={{ fontSize: '0.75rem', lineHeight: '2.7' }}>
          Por favor, sigue las instrucciones cuidadosamente y proporciona la información requerida con precisión. Una vez que hayas completado este paso, podrás avanzar al siguiente para continuar con el proceso de recuperación de tu contraseña.
        </p>
        <p style={{ fontSize: '0.75rem', lineHeight: '2.7' }}>
          Si necesitas ayuda o tienes alguna pregunta, no dudes en contactar a nuestro equipo de soporte técnico a través del correo electrónico: <a href={`mailto:${correoSoporte}`} style={{ color: '#3182ce' }}>{correoSoporte}</a>. Estaremos encantados de asistirte en todo lo que necesites.
        </p>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        <p style={{ fontSize: '0.75rem', lineHeight: '2.7',  fontWeight: 'bold' }}>
         Si esta listo para comenzar haga clic en el boton de abajo.
        </p>
        </div>
      </div>
    </div>
  );
}







{/*
  return (
    <div className="flex flex-col">
  <div className="w-full mx-2 flex-1">
    <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
      {"  "}
      Username
    </div>
    <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
      <input
        onChange={handleChange}
        value={userData["username"] || ""}
        name="username"
        placeholder="Username"
        className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
      />
    </div>
  </div>
</div>
  )
}
 */}