import './sidebar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusFilledIcon from '@mui/icons-material/DirectionsBusFilled';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PaidIcon from '@mui/icons-material/Paid';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="top">
                <span className="logo">Logo Punku</span>
            </div>
            <hr/>
            <div className="center">
               <div className="profile">
                    <img
                    src='https://images.pexels.com/photos/15551777/pexels-photo-15551777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt=''
                    className='avatar'
                    />
                    <div className='profile-detail'>
                        <span>Manuel</span>
                        <p>Manuel@example.com</p>
                    </div>
                    
                </div> 
                <ul>
                    <p className="title">PRINCIPAL</p> 
                    <li className='li-lista'>
                        <DashboardIcon/>
                        <Link to="/" className='link' >
                        <span>Dashboard</span>
                        </Link>
                    </li>
                    <p className="title">LISTAS</p> 
                    <li  className='li-lista'>
                        <BusFilledIcon/>
                        <Link to="/transportistas" className='link'>
                        <span>Transportistas</span>
                        </Link>
                    </li> 
                   <li className='li-lista'>
                        <EventNoteIcon/>
                        <Link to="/solicitudes" className='link'>
                        <span>Solicitudes</span>
                        </Link>
                    </li> 
                    <li className='reporte-title'>
                        <SummarizeIcon/>
                        <span>Reportados</span>
                        <div className="sub-menu">
                            <ul>
                                <li className='sub-menu-lista'>
                                <svg height="18" width="30">
                                    <circle cx="20" cy="10" r="5" stroke="orange" stroke-width="2" fill="white" />
                                </svg>
                                    <Link to="/reporte/publicaciones" className='link'>
                                    <span>Publicaciones</span>
                                    </Link>
                                </li>
                                <li className='sub-menu-lista'>
                                    <svg height="18" width="30">
                                        <circle cx="20" cy="10" r="5" stroke="green" stroke-width="2" fill="white" />
                                    </svg>
                                    <Link to="/reporte/usuarios" className='link'>
                                    <span>Usuarios</span>
                                    </Link>
                                </li>
                                <li className='sub-menu-lista'>
                                    <svg height="18" width="30">
                                        <circle cx="20" cy="10" r="5" stroke="red" stroke-width="2" fill="white" />
                                    </svg>
                                    <Link to="/reporte/transportistas-reporte" className='link'>
                                    <span>Transportistas</span>
                                    </Link>
                                </li>
                            </ul> 
                        </div>
                    </li>                    
                    <li  className='li-lista'>
                        <PaidIcon/>
                        <span>Comisiones</span>
                    </li>   
                    <p className="title">USUARIO</p>                 
                     <li className='li-lista'>
                        <LogoutIcon/>
                        <span>Cerrar Sesión</span>
                    </li> 
                </ul>
            </div> 
            <div className="bottom"> 
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
       </div> 
    )
}

export default Sidebar