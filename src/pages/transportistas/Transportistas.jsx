import Header from "../../components/header/HeaderTransportista"
import Search from "../../components/search/Search"
import Layout from '../layout/Layout'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import './transportistas.scss'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 130 },
  { field: 'apellido', headerName: 'Apellido', width: 130 },
  {
    field: 'age',
    headerName: 'Edad',
    type: 'number',
    width: 100,
  },
  {
    field: 'nombreCompleto',
    headerName: 'Nombre Completo',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.nombre || ''} ${params.row.apellido || ''}`,
  },
];

const rows = [
  { id: 1, apellido: 'Snow', nombre: 'Jon', age: 35 },
  { id: 2, apellido: 'Lannister', nombre: 'Cersei', age: 42 },
  { id: 3, apellido: 'Lannister', nombre: 'Jaime', age: 45 },
  { id: 4, apellido: 'Stark', nombre: 'Arya', age: 16 },
  { id: 5, apellido: 'Targaryen', nombre: 'Daenerys', age: null },
  { id: 6, apellido: 'Melisandre', nombre: null, age: 150 },
  { id: 7, apellido: 'Clifford', nombre: 'Ferrara', age: 44 },
  { id: 8, apellido: 'Frances', nombre: 'Rossini', age: 36 },
  { id: 9, apellido: 'Roxie', nombre: 'Harvey', age: 65 },
];

const Transportistas = () => {
  

  return (
    <Layout>
      <div>
          <Header/>
          <Search/>
      </div>
      <main className="contenedor">
        <div>
        <Button variant="contained" className="button-añadir-transp">Añadir transportista</Button>
        <DataGrid className="table"
          rows={rows}
          columns={columns}

          initialState={{ 
            pagination: { 
              paginationModel: { page: 0, pageSize: 4 },
              
            } 
          }}
          componentsProps={{ 
            pagination: { 
              labelRowsPerPage: 'Filas por página', 
              labelRowSelected: (count) => `${count.toLocaleString()} filas seleccionadas`,
            } 
          }}
          
          
        />
        </div>
      </main>
    </Layout>
  )
}

export default Transportistas