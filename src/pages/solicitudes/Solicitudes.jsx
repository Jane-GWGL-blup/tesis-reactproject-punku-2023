import Header from "../../components/header/HeaderSolicitud"
import Search from "../../components/search/Search"
import Layout from '../layout/Layout'
import Button from '@mui/material/Button';

import { DataGrid } from '@mui/x-data-grid';
import './solicitudes.scss'


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
  {
    field: 'actions',
    headerName: 'Acciones',
    sortable: false,
    width: 220,
    renderCell: (params) => (
      <div>
        <Button
          
          variant="contained"
          color="primary"
          onClick={() => handleEdit(params.row.id)}

        >
          Editar
        </Button>
        <Button
          
          variant="contained"
          color="error"
          onClick={() => handleDelete(params.row.id)}
        >
          Eliminar
        </Button>
      </div>
    ),
  },
];

const rows = [
  { id: 1, apellido: 'Snow', nombre: 'Jon', age: 35},
  { id: 2, apellido: 'Lannister', nombre: 'Cersei', age: 42 },
  { id: 3, apellido: 'Lannister', nombre: 'Jaime', age: 45 },
  { id: 4, apellido: 'Stark', nombre: 'Arya', age: 16 },
  { id: 5, apellido: 'Targaryen', nombre: 'Daenerys', age: null },
  { id: 6, apellido: 'Melisandre', nombre: null, age: 150 },
  { id: 7, apellido: 'Clifford', nombre: 'Ferrara', age: 44 },
  { id: 8, apellido: 'Frances', nombre: 'Rossini', age: 36 },
  { id: 9, apellido: 'Roxie', nombre: 'Harvey', age: 65 },
];
const handleEdit = (id) => {
  // Lógica para editar el elemento con el ID proporcionado
};

const handleDelete = (id) => {
  // Lógica para eliminar el elemento con el ID proporcionado
};

const Solicitudes = () => {
  return (
    <Layout>
      <div>
          <Header/>
          <Search/>
      </div>
      <main className="contenedor">
        <div>
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

export default Solicitudes