import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: { main: '#EC5056' },
        secondary: { main: '#9F9F9F' }
    }
})

function Theme (props: any) {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme