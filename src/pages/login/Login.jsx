import './login.scss'
import {Box, Button, Card, CardHeader, InputAdornment, OutlinedInput, IconButton, CardContent, Container, CardMedia, FormControl, TextField, Grid, Input, InputLabel}from '@mui/material';
import {AccountCircle, Visibility, VisibilityOff } from '@mui/icons-material';
import React,{ useState } from 'react';
import { Link } from 'react-router-dom'
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return (
            <Grid container>
                <Grid item xs={6}>
                    <div className="login-left">
                        <img src={process.env.PUBLIC_URL + '/img/login-bg.png'}  alt="" />
                    </div>
                </Grid>
                <Grid className='container-grid-right' item xs={6}>
                    <div className="login-right">
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Card className="card-login" sx={{  border: 5 }}>
                            <CardMedia
                             >
                                <img src={process.env.PUBLIC_URL + '/img/logo.png'}  alt="" />
                            </CardMedia>
                            <CardContent>
                                <FormControl>
                                    <Grid container  sx={{ p: 1}} >
                                        <TextField
                                        htmlFor="input-with-icon-adornment"
                                            helperText="Por favor ingresa tu usuario"
                                            id="demo-helper-text-misaligned"
                                            label="Usuario"
                                        />
                                    </Grid>
                                    <Grid container xs={12}  sx={{ p: 1}} >
                                        <TextField
                                            htmlFor="input-with-icon-adornment"
                                                helperText="Por favor ingresa tu contraseña"
                                                id="demo-helper-text-misaligned"
                                                type={showPassword ? 'text' : 'password'}
                                                label="Contraseña"
                                        />
                                    </Grid>
                                    <Grid container display="flex" justifyContent="center" alignItems="center" >
                                        <Link to="/" className='link' >
                                            <Button variant="contained" className='btn-login'>Ingresar</Button>
                                        </Link>
                                    </Grid>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </Box>
                    </div>
                </Grid>
            </Grid>


    )
}

export default Login

/** 
 *                 <Card variant="outlined" sx={{ display: 'flex' }} justifyContent="center" alignItems="center"> 
                    <CardMedia
                        component="img"
                        sx={{ width: 500 }}
                        image={process.env.PUBLIC_URL + '/img/login-bg.png'} 
                        alt="Punku"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column',  }} >

                    <CardHeader className="cardheader"
                    title="Iniciar Sesión">
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
                                    sx={{mb: 5}}
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
                    </Box> 
                </Card>
*/