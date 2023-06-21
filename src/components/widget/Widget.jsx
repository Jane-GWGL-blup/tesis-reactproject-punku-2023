import SquareIcon from '@mui/icons-material/SquareRounded';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './widget.scss'

const data=[ 
{ name: "E", Total: 1200},
{ name: "F", Total: 200},
{ name: "M", Total: 400},
{ name: "A", Total: 500},
{ name: "M", Total: 1000},
{ name: "Jun", Total: 900},
];

const Widget = ({type}) => {
  let data1;
  //temprary

  switch(type){
    case "usuarios":
      data1={
        title:"TOTAL DE USUARIOS",
        counter:"20 Usuarios",
        percentage: "+10% this week"
      };
      break;
    case "total":
        data1={
          title:"TOTAL DE GANADO",
          counter:"1050 soles",
          percentage: "+20% this week"
        };
        break;
    case "descargas":
        data1={
          title:"ÚLTIMAS DESCARGAS",
        };
        break;
      default:
        break;
  }
  return (
    <div className='widget'>
      <div className="left">
        <div className="container-title" >
        {/*  <svg width="25" height="20">
            <rect x="10" y="3"  rx="5" ry="5" width="14" height="14" />
          </svg> */}
          <SquareIcon className='boxIcon' fontSize='small'/>
          <span className="title">{data1.title}</span>
        </div>

        <span className="counter">{data1.counter} </span>
        <div className="percentage"> {data1.percentage}
        </div>
      </div>
      <div className="right">
        <div className='container-title'>
        <span className="title-right">Ultimos meses</span>
        </div>
          <ResponsiveContainer width="90%" aspect={6 / 1}>
          <LineChart width={330} height={250} data1={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Total" stroke="#8884d8" />
          </LineChart>
          </ResponsiveContainer>
      </div>

    </div>
  )
}
export default Widget