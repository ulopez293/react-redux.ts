import * as React from 'react'
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

    React.useEffect(() => {
        console.log(showMenu)
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
                <ListItem button key="Benavits">
                    <ListItemIcon sx={{ color: 'white' }}>
                        <ViewListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Benavits" />
                </ListItem>
            </List>
            <List sx={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <ListItem button key="Logout">
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
