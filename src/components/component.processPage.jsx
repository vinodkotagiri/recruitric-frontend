import { Button, Typography } from '@mui/material'
import { Stack, Box } from '@mui/system'
import React, { useState } from 'react'
import { CompareArrowsRounded } from '@mui/icons-material'

const ProcessPage = () => {
    const [openResult, setOpenResult] = useState(false)

    const handleMatch = (event) => {
        setOpenResult(current => !current)
    }
    return (
        <Stack gap={8}>

            <Box sx={{ display: 'flex', gap: '4rem', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                <Stack gap={3} sx={{ justifyContent: 'flex-start', alignItems: 'start' }}>
                    <Typography variant='h5' color='#BBA055'>
                        Upload  Job Description
                    </Typography>
                    {/* <Typography variant='h5' color='#BBA055'>
                    Or
                    </Typography>
                    <Typography variant='h5' color='#BBA055'>
                    Select Fields
                </Typography> */}
                    <input type='file' style={{ color: '#BBA055' }} />
                </Stack>
                <Stack gap={3} sx={{ justifyContent: 'flex-start', alignItems: 'start' }}>
                    <Typography variant='h5' color='#BBA055'>
                        Upload Resume
                    </Typography>
                    <input type='file' style={{ color: '#BBA055' }} />
                </Stack>
            </Box>
            <Button onClick={handleMatch} variant='contained' endIcon={<CompareArrowsRounded />} style={{ backgroundColor: '#BBA055', color: '#001A3C' }}>Match</Button>

            {openResult && (<Box className='popup' sx={{ width: { xs: '90%' } }}>
                <Button onClick={() => setOpenResult(false)} variant='contained' sx={{ position: 'absolute', bottom: '10%', backgroundColor: '#001A3C', color: '#BBA055' }}>Exit</Button>
            </Box>)}

        </Stack >

    )
}

export default ProcessPage