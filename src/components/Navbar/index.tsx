import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginAction } from '../../redux/actions/actions'

import NavbarMenu from './NavbarMenu'
import Logo from '../Logo'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

function Navbar({ login }: { login: boolean }) {
    const auth = useSelector((state: any) => state.login.active)
    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [showMenu, setShowMenu] = useState(0)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        loginAction({ active: event.target.checked, user: {} })(dispatch)
        localStorage.removeItem('token')
        window.location.reload()
    }

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    if (!login) return null

    return (
        <Box sx={{ flexGrow: 1 }}>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={auth}
                            onChange={handleChange}
                            aria-label="login switch"
                        />
                    }
                    label={auth ? 'Cerrar sesión' : 'Iniciar Sesión'}
                />
            </FormGroup>
            <AppBar position="static">
                <Toolbar sx={{ textAlign: 'center' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => setShowMenu(showMenu ? 0 : 1)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Logo navbarStyling={true} />
                    </Typography>
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <NavbarMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </Box>
    )
}

export default Navbar