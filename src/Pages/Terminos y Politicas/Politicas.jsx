import React from 'react'
import {useState} from 'react';
import  './Politicas.css'



export default function Politicas() {


    const [consentimientoFinesSecundarios, setConsentimientoFinesSecundarios] = useState({
        analisisEstadisticos: false,
        requerimientoAutoridad: false,
        prestacionServiciosMedicos: false,
      });
    
      const handleConsentimientoChange = (event) => {
        const { name, checked } = event.target;
        setConsentimientoFinesSecundarios((prevConsentimiento) => ({
          ...prevConsentimiento,
          [name]: checked,
        }));
      };

      

  return (
    <div className='aviso-privacidad'>
      <h2>Aviso de Privacidad</h2>
      <p>
        Cruz Roja Mexicana, con domicilio en calle Nuevo León, colonia Santa Irene, ciudad Huejutla de Reyes, municipio o delegación Huejutla de Reyes, c.p. 43000, en la entidad de Hidalgo, país México, y portal de internet <a href="http://www.cruzrojamexicana.com" target="_blank" rel="noopener noreferrer">http://www.cruzrojamexicana.com</a>, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
      </p>

      <h2>¿Para qué fines utilizaremos sus datos personales?</h2>
      <p>
        Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:
      </p>
      <ul>
        <li>Facturación y cobranza por servicios.</li>
        <li>Mantenimiento de registros para seguimiento a servicios.</li>
        <li>Estudios, registros, estadísticas y análisis de información de salud.</li>
        <li>Mantenimiento de registros para prestación de servicios en el futuro. Análisis estadísticos y de mercado.</li>
        <li>Requerimiento de cualquier autoridad gubernamental y demás que las leyes, normas y reglamentos que así lo establezcan.</li>
        <li>Mercadotecnia o publicitaria.</li>
        <li>Prospección comercial.</li>
      </ul>

      <div>
      <h2>Consentimiento para Fines Secundarios</h2>
      <p>
        De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
      </p>
      <ul>
        <li>Análisis estadísticos y de mercado.</li>
        <li>Requerimiento de cualquier autoridad gubernamental y demás que las leyes, normas y reglamentos que así lo establezcan.</li>
        <li>Prestación de servicios médico-hospitalarios, hospitalización, cirugía, atención de enfermería, servicios farmacéuticos, análisis de laboratorio radiología e imagen, estudios y análisis patológicos, terapia, rehabilitación.</li>
      </ul>

      <p>En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo a continuación:</p>
      <p>No consiento que mis datos personales se utilicen para los siguientes fines:</p>
      <form>
        <label>
          <input
            type="checkbox"
            name="analisisEstadisticos"
            checked={consentimientoFinesSecundarios.analisisEstadisticos}
            onChange={handleConsentimientoChange}
          />
          Análisis estadísticos y de mercado.
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="requerimientoAutoridad"
            checked={consentimientoFinesSecundarios.requerimientoAutoridad}
            onChange={handleConsentimientoChange}
          />
          Requerimiento de cualquier autoridad gubernamental y demás que las leyes, normas y reglamentos que así lo establezcan.
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="prestacionServiciosMedicos"
            checked={consentimientoFinesSecundarios.prestacionServiciosMedicos}
            onChange={handleConsentimientoChange}
          />
          Prestación de servicios médico-hospitalarios, hospitalización, cirugía, atención de enfermería, servicios farmacéuticos, análisis de laboratorio radiología e imagen, estudios y análisis patológicos, terapia, rehabilitación.
        </label>
      </form>
    </div>
    <div>
      <h2>Negativa y Datos Personales</h2>
      <p>
        La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.
      </p>

      <p>
        <strong>Datos personales que utilizaremos para estos fines:</strong>
      </p>
      <p>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:</p>
      <ul>
        <li>Nombre</li>
        <li>Estado Civil</li>
        <li>Registro Federal de Contribuyentes (RFC)</li>
        <li>Clave única de Registro de Población (CURP)</li>
        <li>Lugar de nacimiento</li>
        <li>Fecha de nacimiento</li>
        <li>Nacionalidad</li>
        <li>Domicilio</li>
        <li>Teléfono particular</li>
        <li>Teléfono celular</li>
        <li>Correo electrónico</li>
        <li>Firma autógrafa</li>
        <li>Firma electrónica</li>
        <li>Edad</li>
        <li>Fotografía</li>
        <li>Estatura</li>
        <li>Peso</li>
        <li>Tipo de sangre</li>
        <li>Cuentas bancarias</li>
        <li>Número de tarjetas de crédito</li>
        <li>Seguros</li>
      </ul>
    </div>
    <div>
      <h2>Datos Personales Sensibles</h2>
      <p>
        Además de los datos personales mencionados anteriormente, para las finalidades informadas en el presente aviso de privacidad utilizaremos los siguientes datos personales considerados como sensibles, que requieren de especial protección:
      </p>
      <ul>
        <li>Estado de salud físico presente, pasado o futuro</li>
        <li>Estado de salud mental presente, pasado o futuro</li>
        <li>Información genética</li>
      </ul>

      <h2>¿Con quién compartimos su información personal y para qué fines?

  </h2>
      <p>
        Le informamos que sus datos personales son compartidos dentro y fuera del país con las siguientes personas, empresas, organizaciones o autoridades distintas a nosotros, para los siguientes fines:
      </p>
      <table>
        <thead>
          <tr>
            <th>Destinatario de los datos personales</th>
            <th>Finalidad</th>
            <th>Requiere del consentimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laboratorios</td>
            <td>Análisis de laboratorio</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Clínicas u hospitales</td>
            <td>Hospitalización, servicios médicos</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Centros de Investigación</td>
            <td>Investigación</td>
            <td>Sí</td>
          </tr>
          <tr>
            <td>Aseguradoras</td>
            <td>Servicios</td>
            <td>Sí</td>
          </tr>
        </tbody>
      </table>

      <h2>Transferencias con Consentimiento</h2>
      <p>
        Con relación a las transferencias que requieren de su consentimiento, si usted a continuación no manifiesta su negativa para que éstas ocurran, entenderemos que nos lo ha otorgado:
      </p>
      <p>
        <strong>No autorizo que se lleven a cabo las siguientes transferencias de mis datos personales:</strong>
      </p>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>Destinatario de los datos personales</th>
            <th>Finalidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Laboratorios</td>
            <td>Análisis de laboratorio</td>
            <td></td>
          </tr>
          <tr>
            <td>Clínicas u hospitales</td>
            <td>Hospitalización, servicios médicos</td>
            <td></td>
          </tr>
          <tr>
            <td>Centros de Investigación</td>
            <td>Investigación</td>
            <td></td>
          </tr>
          <tr>
            <td>Aseguradoras</td>
            <td>Servicios</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h3>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso? </h3>
      <p>
        Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.
      </p>
      <p>
        Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del siguiente medio: <br />
        <strong>jestrada@cruzrojamexicana.org.mx</strong>
      </p>
      <p>
        Con relación al procedimiento y requisitos para el ejercicio de sus derechos ARCO, le informamos lo siguiente:
      </p>
      <p>
        a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último? <br />
        Únicamente a través de medios electrónicos
      </p>
      <p>
        b) ¿Qué información y/o documentación deberá contener la solicitud? <br />
        Nombre, Domicilio y Correo Electrónico del Titular
      </p>
      <p>
        c) ¿En cuántos días le daremos respuesta a su solicitud? <br />
        En 5 días hábiles
      </p>
      <p>
        d) ¿Por qué medio le comunicaremos la respuesta a su solicitud? <br />
        Correo Electrónico
      </p>
      <p>
        e) ¿En qué medios se pueden reproducir los datos personales que, en su caso, solicite? <br />
        Únicamente a través de medios electrónicos
      </p>

      <h2>Contacto para Derechos ARCO</h2>
      <p>
        Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:
      </p>
      <p>
        a) Nombre de la persona o departamento de datos personales: Lic. Juan Estrada Miranda <br />
        b) Domicilio: calle Nuevo Léon, colonia Santa Irene, ciudad Huejutla de Reyes, municipio o delegación Huejutla de Reyes, c.p. 43000, en la entidad de Hidalgo, país México <br />
        c) Correo electrónico: jestrada@cruzrojamexicana.org.mx <br />
        d) Número telefónico: 5510844519
      </p>

      <h2>Revocación del Consentimiento</h2>
      <p>
        Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Para revocar su consentimiento deberá presentar su solicitud a través del siguiente medio: <br />
        <strong>jestrada@cruzrojamexicana.org.mx</strong>
      </p>
      <p>
        Con relación al procedimiento y requisitos para la revocación de su consentimiento, le informamos lo siguiente:
      </p>
      <p>
        a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último? <br />
        Únicamente a través de medios electrónicos
      </p>
      <p>
        b) ¿Qué información y/o documentación deberá contener la solicitud? <br />
        Nombre, Domicilio y Correo Electrónico del Titular
      </p>
      <p>
        c) ¿En cuántos días le daremos respuesta a su solicitud? <br />
        En 5 días hábiles
      </p>
      <p>
        d) ¿Por qué medio le comunicaremos la respuesta a su solicitud? <br />
        Únicamente a través de medios electrónicos
      </p>

      <h2>Limitar el Uso o Divulgación de la Información Personal</h2>
      <p>
        Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos el siguiente medio: <br />
        <strong>jestrada@cruzrojamexicana.org.mx</strong>
      </p>

      <h2>Uso de Tecnologías de Rastreo</h2>
      <p>
        Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet. Los datos personales que recabamos a través de estas tecnologías, los utilizaremos para los siguientes fines:
      </p>
      <p>
        Dicha información se obtiene y almacena con el fin de medir la actividad del sitio e identificar tendencias sobre navegación que no son atribuibles a un individuo en específico.
      </p>
      <p>
        Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:
      </p>
      <ul>
        <li>Identificadores, nombre de usuario y contraseñas de una sesión</li>
        <li>Región en la que se encuentra el usuario</li>
        <li>Tipo de navegador del usuario</li>
        <li>Tipo de sistema operativo del usuario</li>
        <li>Fecha y hora del inicio y final de una sesión de un usuario</li>
        <li>Páginas web visitadas por un usuario</li>
        <li>Búsquedas realizadas por un usuario</li>
        <li>Listas y hábitos de consumo en páginas de compras</li>
      </ul>

      <h2>Notificación de Cambios en el Aviso de Privacidad</h2>
      <p>
        El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de: <br />
        <strong>jestrada@cruzrojamexicana.org.mx</strong>
      </p>

      <h2>Consentimiento para el Tratamiento de Datos Personales</h2>
      <p>
        <label>
          Consiento que mis datos personales sean tratados de conformidad con los términos y condiciones informados en el presente aviso de privacidad.
          <input type="checkbox" />
        </label>
      </p>

      <p>Última actualización: 14/11/2023</p>
    </div>
    </div>

  )
}
