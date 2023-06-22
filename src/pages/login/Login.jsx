import './login.scss'
import {Box, Card, CardHeader, CardContent, Button, Typography, FormControl, TextField, Grid, TextareaAutosize}from '@mui/material';


const Login = () => {
    return (
        <div className='container'>
            <h1 className="title">Login</h1>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" > 
                <CardHeader className="cardheader"
                title="Iniciar Sesión"
                >
                </CardHeader>   
                <CardContent>
                    <FormControl>
                    <Grid container spacing={8}>
                        <Grid item xs={12} >
                            <TextField 
                                label="Nombre del usuario"
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
    )
}

export default Login