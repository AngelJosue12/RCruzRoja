import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuth } from '../Components/Contexts/AuthContexts'
//import pages.......
import HomeAdmin from '../Admin/Pages/Home/HomeAdmin'
import Home from '../Pages/Home'
import Login from '../Pages/User/Login/Login'
import Registrer from '../Pages/User/Registrer/Registrer'
import NotFound from '../Pages/NotFound/NotFound'
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs'
import Servicios from '../Pages/Servicios/Servicios'
import RecuperarContraseña from '../Components/Form/RecuperarContraseña'
import MapNav from '../Pages/MapaNav'
import Token from '../Components/Form/Token'
import Restablece from '../Components/Form/Restablece'
import Terminos from '../Pages/Terminos y Politicas/Terminos'
import Politicas from '../Pages/Terminos y Politicas/Politicas'
import PoliCokkies from '../Pages/PoliticasCookies/PoliCokkies'
import Perfil from '../Pages/User/Perfil'
//import components.....
 import Nav from '../Components/Nav/Nav'
 import Footer from '../Components/Footer/Footer'
 import './Router.css'
 import { message } from 'antd';

 import Contenido from '../Components/ChatBot/Contenido/Contenido'

export default function Router() {
  const { isAuthenticated } = useAuth();

 

  const showMessage = (msg) => {
    message.info(msg);
  };

  function getLoginElement() {
    if (isAuthenticated === true) {
      
      return <Navigate to="/" replace />;
    } else {
      return <Login />;
    }
  }
  
  function getRegistrerElement() {
    if (isAuthenticated === true) {
      return <Navigate to="/" replace />;
    } else {
      return <Registrer />;
    }
  }


  function getPerfilUser(){
    if (isAuthenticated == true) {
      return <Perfil />;
    } else {
      return  <Navigate to="/Login" replace state={{ from: '/Perfil' }} />;
    }
  }
  function AdminRoutes() {
    return (
      <>
        <Route path="/Adm" element={<HomeAdmin />} />
      </>
    );
  }


  return (  
    <BrowserRouter>
    <Nav/>
    <div className="mPan"><Breadcrumbs/></div>
    <Routes>
       {/* Rutas públicas */}
       <Route path="/" element={<Home />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Recuperacion" element={<RecuperarContraseña />} />
        <Route path="/Token" element={<Token />} />
        <Route path="/Restablece" element={<Restablece />} />
        <Route path="/Terminos" element={<Terminos />} />
        <Route path="/Politicas" element={<Politicas />} />
        <Route path="/Cookies" element={<PoliCokkies />} />

        {/* Ruta para el perfil */}
        <Route
        path="/Perfil"
        element={getPerfilUser()}
      />

  
          <Route
            path="/Login"
            element={getLoginElement()}
          />
          <Route
            path="/Registro"
            element={getRegistrerElement()}
          />

     

        {/* Ruta para cualquier otro caso */}
        <Route path="*" element={<NotFound />} />
  
        <Route path="/" element={<AdminRoutes />} />
    </Routes>
    <Contenido/>
    <Footer/>
    </BrowserRouter>

    
  )
}
