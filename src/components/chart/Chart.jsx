import SquareIcon from '@mui/icons-material/SquareRounded';
import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data =[
  { name: "Enero", Total: 1200},
  { name: "Febrero", Total: 200},
  { name: "Marzo", Total: 400},
  { name: "Abril", Total: 500},
  { name: "Mayo", Total: 1000},
  { name: "Junio", Total: 900},
];


const Chart = () => {
  return (
    <div className="chart">
      <div className="left">
        <div className="container-title" >
          <SquareIcon className='boxIcon' fontSize='small'/>
         {/* <svg width="25" height="20">
            <rect x="10" y="3"  rx="5" ry="5" width="14" height="14" />
          </svg> */}
          <span className="title">ULTIMAS DESCARGAS</span>
        </div>
      </div>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="3 2¿3" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />        </AreaChart>
        </ResponsiveContainer>   
    </div>
  )
}

export default Chart