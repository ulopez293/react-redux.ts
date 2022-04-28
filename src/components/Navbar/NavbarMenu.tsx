import * as React from 'react'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../redux/actions/actions'

import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import LogoutIcon from '@mui/icons-material/Logout'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ViewListIcon from '@mui/icons-material/ViewList'

import Drawer from '@mui/material/Drawer'

import Logo from '../Logo'

type Anchor = 'left'

interface Props {
    showMenu: number,
    setShowMenu: (showMenu: number) => void
}

function NavbarMenu({ showMenu, setShowMenu }: Props) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [state, setState] = React.useState({ left: false })
    const anchor = 'left'
    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return
        }

        setShowMenu(showMenu ? 0 : 1)
        setState({ ...state, [anchor]: open })
    }

    const logout = () => {
        loginAction({ active: false, user: {} })(dispatch)
        localStorage.removeItem('token')
        window.location.reload()
    }

    React.useEffect(() => {
        setState({ ...state, [anchor]: Boolean(showMenu) })
    }, [showMenu])

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: 250, height: '100%', display: 'flex', flexDirection: 'column' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
            bgcolor="primary.main"
            color="primary.contrastText"
        >
            <List>
                <ListItem button key="Logo">
                    <Logo navbarStyling={true} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button key="Benavits" onClick={()=> { navigate('/') } } >
                    <ListItemIcon sx={{ color: 'white' }}>
                        <ViewListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Benavits" />
                </ListItem>
            </List>
            <List sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <ListItem button key="Logout"
                    sx={{ cursor: 'pointer' }}
                    onClick={logout}
                >
                    <ListItemIcon sx={{ color: 'white' }}>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cerrar Sesión" />
                </ListItem>
            </List>
        </Box>
    )

    return (
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
        </Drawer>
    )
}

export default NavbarMenu
