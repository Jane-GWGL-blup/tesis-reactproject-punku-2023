import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Transportistas from '../pages/transportistas/Transportistas'
import Solicitudes from '../pages/solicitudes/Solicitudes';
import Comisiones from '../pages/comision/Comision';
import PublicacionesReporte from '../pages/reportes/publicaciones/Publicaciones'
import UsuariosReporte from '../pages/reportes/usuarios/Usuarios';
import TransportistasReporte from '../pages/reportes/transportistas/Transportistas'

import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom'



function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' > 
                    <Route index element={<Home/>}/>
                    <Route path='solicitudes' element={<Solicitudes/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='transportistas' element={<Transportistas/>}/>
                    <Route path='comisiones' element={<Comisiones/>}/>
                    <Route path='reporte'>
                        <Route/>
                        <Route path='publicaciones' element={<PublicacionesReporte/>}/>
                        <Route path='usuarios' element={<UsuariosReporte/>}/>
                        <Route path='transportistas' element={<TransportistasReporte/>}/>
                    </Route>
                </Route>
                <Route exact path="/login" component={Login} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;