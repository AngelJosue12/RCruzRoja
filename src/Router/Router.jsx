import{BrowserRouter, Routes, Route} from 'react-router-dom'

//import pages.......

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
//import components.....
 import Nav from '../Components/Nav/Nav'
 import Footer from '../Components/Footer/Footer'
 import './Router.css'

 import Contenido from '../Components/ChatBot/Contenido/Contenido'

export default function Router() {
  return (  
    <BrowserRouter>
    <Nav/>
    <div className="mPan"><Breadcrumbs/></div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Registro' element={<Registrer/>}/>
        <Route path='Servicios' element={<Servicios/>}/>
        <Route path='Recuperacion' element={<RecuperarContraseña/>}/>
        <Route path='Token' element={<Token/>}/>
        <Route path='Restablece' element={<Restablece/>}/>
        <Route path='Terminos' element={<Terminos/>}/>
        <Route path='Politicas' element={<Politicas/>}/>
        <Route path='Cookies' element={<PoliCokkies/>}/>
    </Routes>
    <Contenido/>
    <Footer/>
    </BrowserRouter>
  )
}
