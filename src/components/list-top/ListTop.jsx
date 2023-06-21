import './listTop.scss'
import SquareIcon from '@mui/icons-material/SquareRounded';

const ListTop = () => {
    return (
    <div className="widget-list">
        <div className="left">
            <div className="container-title">

                <SquareIcon className='boxIcon' fontSize='small'/>
           {/*      <svg width="25" height="20">
                <rect x="10" y="3"  rx="5" ry="5" width="14" height="14" />
                </svg>
                </svg> */}
                <span className='title'>TOP DE USUARIOS</span>
            </div>
            <div className="list-top">
                <ul>
                    <li>
                        <span>Nombre de Usuario</span>
                    </li>
                    <li>
                        <span>Nombre de usuario</span>
                    </li> 
                   <li>
                        <span>Nombre de usuario</span>
                    </li> 
                </ul>
            </div>
        </div>
      
    </div>
       
    )
}
export default ListTop