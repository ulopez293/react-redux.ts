import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loginAction } from '../../redux/actions/actions'

import './Login.css'
import Logo from '../Logo'
import Theme from './Theme'

import API from '../../utilities/api'

import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'


function Login() {
    const passwordRef = useRef<HTMLInputElement>(null)
    const [credentials, setCredentials] = useState({ email: '', password: '', disabledButton: true })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        if (data.get('email') !== 'prueba@nextia.mx' && data.get('password') !== 'PruebaNextia2022') {
            alert('Usuario o contraseña incorrectos')
            return
        }

        API.callPOST('/login', {
            user: { email: data.get('email'), password: data.get('password') }
        }, (response: any) => {
            loginAction({ active: true, user: response })(dispatch)
            navigate('/home')
        }, (error: any) => {
            console.log(error)
            alert('Error al iniciar sesión')
        })

    }
    
    const handleLoginKeyUp = (event: any) => {
        if (event.key !== 'Enter') return
        event.preventDefault()
        if (event.target.name === 'email') {
            passwordRef.current?.focus()
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        let newValues = { ...credentials, [name]: value }
        if (newValues.email.trim().length > 0 && newValues.password.trim().length > 0) {
            setCredentials({ ...newValues, disabledButton: false })
        } else {
            setCredentials({ ...newValues, disabledButton: true })
        }
    }
    
    const forgetPassword = (event: any) => {
        alert("email: prueba@nextia.mx password: PruebaNextia2022")
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
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Dirección de correo electrónico"
                            name="email"
                            autoComplete="email"
                            type="email"
                            onKeyUp={handleLoginKeyUp}
                            onChange={handleChange}
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
                            inputRef={passwordRef}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={credentials.disabledButton}
                        >
                            ENTRAR
                        </Button>
                        <Grid container justifyContent="flex-end" >
                            <Grid item>
                                <Link color="text.secondary"
                                    style={{ cursor: 'pointer' }}
                                    onClick={forgetPassword}
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