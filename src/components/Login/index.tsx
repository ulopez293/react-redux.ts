import React, { useEffect } from 'react'
import './Login.css'
import Logo from '../Logo'
import Theme from './Theme'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'


function Login() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }

    useEffect(() => {
        document.body.classList.add('background-red-login')
        return () => { document.body.classList.remove('background-red-login') }
    }, [])

    return (
        <Theme>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }} >
                    <Logo />
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Dirección de correo electrónico"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled
                        >
                            ENTRAR
                        </Button>
                        <Grid container justifyContent="flex-end" >
                            <Grid item>
                                <Link color="text.secondary"
                                    variant="body2">
                                    {"¿Olvidaste tu Contraseña?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </Theme>
    )
}

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}{new Date().getFullYear()}
        </Typography>
    )
}

export default Login