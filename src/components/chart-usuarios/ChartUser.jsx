import './chartUser.scss'
import { LineChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, Legend } from 'recharts';
/*
const data =[
    { name: "Enero", Total: 1200},
    { name: "Febrero", Total: 200},
    { name: "Marzo", Total: 400},
    { name: "Abril", Total: 500},
    { name: "Mayo", Total: 1000},
    { name: "Junio", Total: 900},
  ];
*/

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]

const ChartUser = () => {
  return (
    <div className="chart-user">
      <ResponsiveContainer width="100%" >
      <LineChart width={200} height={250} data={data}
        margin={{ top: 3, right: 20, left: 20, bottom: 0 }}>
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>   
  </div>
  )
}

export default ChartUser