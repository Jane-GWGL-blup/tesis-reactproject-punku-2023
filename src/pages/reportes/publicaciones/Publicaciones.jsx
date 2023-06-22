import Header from "../../../components/header/HeaderReportePublicacion"
import Search from "../../../components/search/Search"
import Layout from "../../layout/Layout"
import {Box, Card, CardHeader, CardContent, Button, Typography, FormControl, TextField, Grid, TextareaAutosize}from '@mui/material';
import './publicaciones.scss'


const Publicaciones = () => {
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
              title="Publicación N#"
              >
              </CardHeader>   
              <CardContent>
                <FormControl>
                  <Grid container spacing={8}>
                      <Grid item xs={5}>
                        <TextField 
                        label="Asunto"
                        required
                        variant="outlined"
                        color="secondary"
                        type="email"
                        sx={{mb: 3}}
                        fullWidth
                        />
                      </Grid>
                      <Grid item xs={7} >
                        <TextField 
                            label="Email"
                            required
                            variant="outlined"
                            size="small"
                            color="secondary"
                            type="email"
                            sx={{mb: 3}}
                            fullWidth
                            disabled
                        />
                        <TextField 
                            label="Email"
                            required
                            variant="outlined"
                            size="small"
                            color="secondary"
                            type="email"
                            sx={{mb: 3}}
                            fullWidth
                            disabled
                        />
                      </Grid>
                  </Grid>
                  <Grid container>
                      <Grid item xs={12}>
                        <div className="contenedorTextArea">
                          <div className="tituloTextArea">
                            <h4>Descripción del caso</h4>
                          </div>
                        <textarea rows="5" cols="50" className="textarea"></textarea>
                        </div>
                      </Grid>
                  </Grid>
                  <Grid container spacing={8} >
                      <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
                        <Button variant="contained" className="button-ver" type="submit">Ver publicación</Button>
                      </Grid>
                      <Grid item xs={6}  display="flex" justifyContent="center" alignItems="center">
                        <Button variant="contained" className="button-delete" type="submit">Borrar publicación</Button>  
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

export default Publicaciones