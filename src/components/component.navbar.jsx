import React, { Fragment, useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, IconButton, Stack, Button } from '@mui/material'
import { MenuRounded, CloseRounded } from '@mui/icons-material'
import { default as RecruitricLogo } from '../assets/logo.png'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [displayDrawer, setDisplayDrawer] = useState('none')
    const navigate = useNavigate()
    const toggleMenu = () => {
        setToggle(!toggle)
        displayDrawer === 'none' ? setDisplayDrawer('flex') : setDisplayDrawer('none')
    }
    return (
        <Fragment>
            <AppBar style={{ backgroundColor: '#001A3C' }}>
                <Toolbar>
                    <Stack direction='row' sx={{ flexGrow: 1, justifyContent: 'space-between' }}>
                        <Stack direction='row' sx={{ alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
                            <img src={RecruitricLogo} style={{ width: '4rem' }} alt='logo' />
                            <Typography color='#BBA055' sx={{ fontSize: '1.4rem', fontFamily: 'Righteous' }}> Recruitric</Typography>
                        </Stack>
                        <Stack direction='row' sx={{ display: { xs: 'none', md: 'flex' } }} color='#BBA055'>
                            <Button variant='large' onClick={() => navigate('/')}>Home</Button>
                            <Button variant='large' onClick={() => navigate('/features')}>Features</Button>
                            <Button variant='large' onClick={() => navigate('/contact')}>Get in touch</Button>
                        </Stack>
                        {
                            !toggle ? <IconButton size='large' sx={{ color: '#BBA055', display: { xs: 'flex', md: 'none' } }}
                                onClick={() => toggleMenu()}>
                                <MenuRounded sx={{ fontSize: 'inherit' }} />
                            </IconButton> :
                                <IconButton size='large' sx={{ color: '#BBA055', display: { xs: 'flex', md: 'none' } }}
                                    onClick={() => toggleMenu()}>
                                    <CloseRounded sx={{ fontSize: 'inherit' }} />
                                </IconButton>
                        }
                    </Stack>
                </Toolbar>
            </AppBar >
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }
            }>
                <Outlet />
            </Box >
            <Stack direction='column' sx={{ zIndex: '1', width: '100%', position: 'absolute', top: '5rem', right: '0', display: { xs: `${displayDrawer}`, md: 'none' } }} color='#BBA055'>
                <Button variant='large' onClick={() => navigate('/')}>Home</Button>
                <Button variant='large' onClick={() => navigate('/about')}>Features</Button>
                <Button variant='large' onClick={() => navigate('/skills')}>Get in touch</Button>
            </Stack>
        </Fragment >
    )
}

export default Navbar