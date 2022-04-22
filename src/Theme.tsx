import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
    palette: {
        primary: { main: '#EC5056' },
        secondary: { main: '#9F9F9F' }
    }
})

function Theme(props: any) {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth={false}>
                <CssBaseline />
                {props.children}
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}{new Date().getFullYear()}
        </Typography>
    )
}

export default Theme