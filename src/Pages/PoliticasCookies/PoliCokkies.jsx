import React from 'react'
import './cookies.css'

export default function PoliCokkies() {

    const cookiesData = [
        { nombre: '__utma', tipo: 'De Terceros (Google Analytics)', caducidad: '2 años', finalidad: 'Se usa para distinguir usuarios y sesiones.', clase: 'No Exenta' },
        { nombre: '__utmb', tipo: 'De Terceros (Google Analytics)', caducidad: '30 minutos', finalidad: 'Se usa para determinar nuevas sesiones o visitas.', clase: 'No Exenta' },
        { nombre: '__utmc', tipo: 'De Terceros (Google Analytics)', caducidad: 'Al finalizar la sesión', finalidad: 'Se configura para su uso con Urchin.', clase: 'No Exenta' },
        { nombre: '__utmz', tipo: 'De Terceros (Google Analytics)', caducidad: '6 meses', finalidad: 'Almacena el origen o la campaña que explica cómo el usuario ha llegado hasta la página web.', clase: 'No Exenta' },
      ];


  return (
       <div className="politicas-cookies">
    <div>
      <h1>Política de Cookies</h1>
      <p>Actualizado en 14 de noviembre de 2023.</p>

      <h2>Definiciones y términos clave</h2>
      <p>
        Para ayudar a explicar lo más claramente posible esta Política de Cookies, cada vez que alguno de estos términos está referenciado, están estrictamente definidos como:
      </p>
      <ul>
        <li><strong>Cookie:</strong> pequeña cantidad de datos generados por un sitio web y guardados por su navegador web. Se utiliza para identificar su navegador, proporcionar análisis, recordar información sobre usted, como su preferencia de idioma o información de inicio de sesión.</li>
        <li><strong>Empresa:</strong> cuando esta política menciona "Empresa", "nosotros", "nos"/o "nuestro", se refiere a [Tu Empresa], que es responsable de su información según esta Política de Cookies.</li>
        <li><strong>Dispositivo:</strong> cualquier dispositivo conectado a Internet, como un teléfono, tableta, computadora o cualquier otro dispositivo que se puede utilizar para visitar y utilizar los servicios.</li>
        <li><strong>Dato Personal:</strong> cualquier información que directa, indirectamente o en conexión con otra información, incluido un número de identificación personal, permite la identificación o identificabilidad de una persona natural.</li>
        <li><strong>Servicio:</strong> se refiere al servicio prestado por [Tu Empresa], según se describe en los términos relativos (si están disponibles) y en esta plataforma.</li>
        <li><strong>Servicio de terceros:</strong> se refiere a anunciantes, patrocinadores de concursos, promocionales y de marketing. socios y otras personas que proporcionan nuestro contenido o cuyos productos o servicios creemos que pueden interesarte.</li>
        <li><strong>App/Aplicación:</strong> app, se refiere al PRODUCTO DE SOFTWARE identificado anteriormente.</li>
        <li><strong>Usted:</strong> una persona o entidad que está registrada para utilizar los Servicios.</li>
      </ul>

      <h2>Introducción</h2>
      <p>
        Esta Política de cookies explica cómo [Tu Empresa] y sus afiliados (colectivamente "nosotros", "nos" y "nuestro"), utilizamos cookies y tecnologías similares para reconocerlo cuando visita nuestra aplicación, incluidas, entre otras, las URL relacionadas, las versiones móviles o localizadas y los dominios/subdominios ("Sitios web"). Explica qué son estas tecnologías y por qué las utilizamos, así como las opciones sobre cómo controlarlos.
      </p>

      <h3>¿Qué es una cookie?</h3>
      <p>
        Una cookie es un pequeño archivo de texto que se almacena en su computadora u otro dispositivo conectado a Internet para identificar su navegador, proporcionar análisis, recordar información sobre usted, como su preferencia de idioma o información de inicio de sesión. Son completamente seguros y no se pueden usar para correr programas o enviar virus a su dispositivo.
      </p>
    </div>
    <h2>¿Por qué utilizamos cookies?</h2>
      <p>
        Utilizamos cookies propias y/o de terceros en nuestra aplicación para diversos fines, tales como:
      </p>
      <ul>
        <li>Para facilitar el funcionamiento y la funcionalidad de nuestra aplicación;</li>
        <li>Para mejorar su experiencia con nuestra aplicación y hacer que la navegación por ellas sea más rápida y más fácil;</li>
        <li>Para permitirnos crear una experiencia de usuario personalizada para usted y para que entendamos qué es útil o de su interés;</li>
        <li>Analizar cómo se utiliza nuestra aplicación y cuál es la mejor manera de personalizarla;</li>
        <li>Identificar perspectivas de futuro y personalizar las interacciones de marketing y ventas con ellas;</li>
        <li>Para facilitar la adaptación de la publicidad en línea a sus intereses.</li>
      </ul>

      <h2>¿Qué tipo de cookies utiliza?</h2>
      <p>
        Las cookies pueden ser cookies de sesión o cookies persistentes. Una cookie de sesión caduca automáticamente cuando cierra su navegador. Una cookie persistente permanecerá hasta que caduque o usted borre sus cookies. Las fechas de caducidad se establecen en las propias cookies; algunos pueden caducar después de un minuto, mientras que otros pueden caducar después de varios años. Cookies colocadas por el sitio web que estás las visitas se denominan "cookies de origen".
      </p>
      <p>
        Las cookies estrictamente necesarias son necesarias para que nuestra aplicación funcione y no se pueden desactivar en nuestros sistemas. Son esenciales para permitirle navegar por la aplicación y utilizar sus características. Si elimina o desactiva estas cookies, no podemos garantizar que podrá utilizar nuestra aplicación.
      </p>

      <h3>Utilizamos los siguientes tipos de cookies en nuestra aplicación:</h3>
      
      <h4>Cookies esenciales</h4>
      <p>
        Utilizamos cookies esenciales para que nuestra aplicación funcione: estas cookies son estrictamente necesarias para permitir funcionalidad principal como seguridad, administración de red, sus preferencias de cookies y accesibilidad. Sin ellas no podrías utilizar los servicios básicos. Puede desactivarlas mediante cambiar la configuración de su navegador, pero esto puede afectar el funcionamiento de los sitios web.
      </p>

      <h4>Cookies de rendimiento y funcionalidad</h4>
      <p>
        Estas cookies se utilizan para mejorar el rendimiento y la funcionalidad de nuestra aplicación, pero no son esenciales para su uso. Sin embargo, sin estas cookies, ciertas funciones, como vídeos, pueden no estar disponibles o se le solicitará que ingrese sus datos de inicio de sesión cada vez que visite la aplicación ya que no podríamos recordar que había iniciado sesión anteriormente.
      </p>
      <h2>Cookies de marketing</h2>
      <p>
        Estas cookies de marketing basadas en cuentas nos permiten identificar prospectos futuros y personalizar interacciones de ventas y marketing con ellos.
      </p>

      <h2>Cookies de análisis y personalización</h2>
      <p>
        Estas cookies recopilan información que se utiliza para ayudarnos a comprender cómo se utiliza nuestra aplicación o qué tan efectivas son nuestras campañas de marketing o para ayudarnos a personalizar nuestra aplicación para usted.
      </p>
      <p>
        Utilizamos cookies proporcionadas por Google Analytics para recopilar datos limitados directamente del usuario final, navegadores para permitirnos comprender mejor su uso de nuestra aplicación. Más información sobre cómo Google recopila y utiliza estos datos se puede encontrar en: <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">https://www.google.com/policies/privacy/partners/</a>. Puede optar por no recibir todos los análisis respaldados por Google en nuestros sitios web visitando: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>.
      </p>

      <h2>Cookies de redes sociales</h2>
      <p>
        Estas cookies se utilizan cuando usted comparte información usando un botón para compartir en las redes sociales o "me gusta" en nuestro Sitio o vincula su cuenta o interactúa con nuestro contenido en o a través de una red social Sitio web de networking como Facebook, Twitter o Google+. La red social dejará constancia de que he hecho esto. Estas cookies también pueden incluir cierto código que se ha colocado en la plataforma para ayudar a realizar un seguimiento de las conversiones de los anuncios, optimizar los anuncios en función de los datos recopilados, crear anuncios dirigidos audiencias para anuncios futuros y remarketing a usuarios calificados que ya han realizado determinadas acciones en la plataforma.
      </p>

      <h2>¿Cómo se pueden gestionar las cookies?</h2>
      <p>
        La mayoría de los navegadores le permiten controlar las cookies a través de sus preferencias de "configuración". Sin embargo, si usted limita la capacidad de los sitios web para configurar cookies, puede empeorar su experiencia general de usuario, ya que ya no será personalizado para usted. También puede impedirle guardar configuraciones personalizadas como Información Entrar. Los fabricantes de navegadores proporcionan páginas de ayuda relacionadas con la gestión de cookies en sus productos.
      </p>
      <p>
        Los fabricantes de navegadores proporcionan páginas de ayuda relacionadas con la gestión de cookies en sus productos. Consulte a continuación para obtener más información.
      </p>
      <ul>
        <li>Google Chrome</li>
        <li>Internet Explorer</li>
        <li>Mozilla Firefox</li>
        <li>Safari (Desktop)</li>

      </ul>
      <div>
      <h2>Bloquear y deshabilitar cookies y tecnologías similares</h2>
      <p>
        Donde quiera que estés, también puedes configurar tu navegador para bloquear cookies y tecnologías similares, pero esta acción puede bloquear nuestras cookies esenciales e impedir que nuestra aplicación funcione correctamente y es posible que no pueda utilizar plenamente todas sus funciones y servicios. Tú También debe tener en cuenta que también puede perder cierta información guardada (por ejemplo, detalles de inicio de sesión guardados, información del sitio). Si bloquea las cookies en su navegador. Diferentes navegadores realizan diferentes controles disponibles para ti, Deshabilitar una cookie o categoría de cookie no elimina la cookie de su navegador, deberá hacerlo usted mismo desde su navegador, deberá visitar su el menú de ayuda del navegador para obtener más información.
      </p>

      <h2>Cambios a Nuestra Política de Cookies</h2>
      <p>
        Podemos cambiar nuestro Servicio y nuestras políticas, y es posible que necesitemos realizar cambios en esta Política de Cookies para que reflejen con precisión nuestro Servicio y nuestras políticas. A menos que la ley exija lo contrario, Le notificaremos (por ejemplo, a través de nuestro Servicio) antes de realizar cambios en esta Política de Cookies y brindarle la oportunidad de revisarlas antes de que entren en vigencia. Luego, si continúa utilizando el Servicio, estará sujeto a la Política de Cookies actualizada. Si no desea aceptar esta o cualquier Política de Cookies actualizada, puede eliminar su cuenta.
      </p>

      <h2>Tu consentimiento</h2>
      <p>
        Al utilizar nuestra aplicación, registrar una cuenta o realizar una compra, por la presente usted acepta nuestra Política de Cookies y acepta sus términos.
      </p>

      <h2>Contáctenos</h2>
      <p>
        No dude en ponerse en contacto con nosotros si tiene alguna pregunta sobre nuestra Política de Cookies.
      </p>
      <ul>
        <li>Vía correo electrónico: <a href="mailto:jestrada@cruzrojamexicana.org.mx">jestrada@cruzrojamexicana.org.mx</a></li>
        <li>A través del número de teléfono: 5510844519</li>
        <li>A través de este enlace: <a href="http://www.cruzrojamexicana.com" target="_blank" rel="noopener noreferrer">http://www.cruzrojamexicana.com</a></li>
        <li>A través de esta dirección: Calle Nuevo León, colonia Santa Irene, ciudad Huejutla de Reyes, cp. 43000, en la entidad de Hidalgo.</li>
      </ul>
    </div>
    </div>
  )
}
