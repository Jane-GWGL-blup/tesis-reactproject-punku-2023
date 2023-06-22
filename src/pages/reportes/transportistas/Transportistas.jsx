import Layout from "../../layout/Layout"
import Header from "../../../components/header/HeaderReporteTransportista"
import Search from "../../../components/search/Search"
import {Box, Card, CardHeader, CardContent, Button, Typography, FormControl, TextField, Grid, TextareaAutosize}from '@mui/material';

import './transportistas.scss'


const Transportistas = () => {
  return (
    <Layout>
        <div>
            <Header/>
            <Search/>
        </div>
        <main className="contenedor">
          <div>
          <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" > 
              <CardHeader className="cardheader"
              title="Transportista Reportado"
              >
              </CardHeader>   
              <CardContent>
                <FormControl>
                  <Grid container spacing={8}>
                      <Grid item xs={2} display="flex" justifyContent="center" alignItems="center">
                            <img
                          src='https://images.pexels.com/photos/15551777/pexels-photo-15551777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                          alt=''
                          className='avatar'
                          />
                      </Grid>
                      <Grid item xs={3} >
                        <TextField 
                            label="Nombre del transportista"
                            size="small"
                            color="secondary"
                            type="email"
                            sx={{mb: 3}}
                            fullWidth
                            disabled
                        />
                      </Grid>
                      <Grid  container item xs={7} >
                        <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
                          <Button variant="contained" className="button-suspender-transportista" type="submit">Suspender trans.</Button>
                        </Grid>
                        <Grid item xs={6}  display="flex" justifyContent="center" alignItems="center">
                          <Button variant="contained" className="button-delete-transportista" type="submit">Eliminar transport.</Button>  
                        </Grid>
                      </Grid>
                  </Grid>
                  <Grid container>
                      <Grid item xs={12}>
                        <div className="contenedor-text-area">
                          <div className="titulo-text-area">
                            <h4>Descripción</h4>
                          </div>
                        <textarea rows="5" cols="50" className="textarea" placeholder="Descripción ..."></textarea>
                        </div>
                      </Grid>
                  </Grid>
                </FormControl>
              </CardContent>
            </Card> 
          </Box>
          </div>
        </main>
    </Layout>
  )
}

export default Transportistas