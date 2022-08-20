import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Box, Stack, Typography } from '@mui/material'
import { CategoryRounded, ScienceRounded } from '@mui/icons-material'
import HeroImg from '../assets/hero-img.png'

const HomePage = () => {
    const navigate = useNavigate()
    return (
        < Stack direction='row' gap={3} sx={{ justifyContent: 'space-around' }
        }>
            <Stack direction='column' gap={3} sx={{ justifyContent: 'center', alignItems: 'left', padding: '4rem' }}>
                <Typography variant='h4' sx={{ fontFamily: 'Aboreto' }} color='#BBA055'>What is Recruitric?</Typography>
                <Typography variant='p' sx={{ fontFamily: 'Aboreto' }} color='#E8FF8F75'> A fast, easy-to-use online application that helps hiring managers reach potential employees. Whether you are looking for professional freelancers or full-time employees, Recruitric will allow you to search and match your ideal candidate right within the app.</Typography>
                <Stack direction='row' gap={4} sx={{ marginTop: '2rem' }}>
                    <Button variant='contained' sx={{ color: '#001A3C', backgroundColor: '#BBA055' }} endIcon={<CategoryRounded />} onClick={() => navigate('/features')}>Features</Button>
                    <Button variant='outlined' sx={{ color: '#BBA055' }} endIcon={<ScienceRounded />} onClick={() => navigate('/process')}>Try Now</Button>
                </Stack>
            </Stack>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <img src={HeroImg} alt='hero-img' style={{ width: '100%' }} />
            </Box>
        </ Stack >

    )
}

export default HomePage