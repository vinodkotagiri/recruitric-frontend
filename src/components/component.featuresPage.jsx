import React, { Fragment } from 'react'
import { Stack, Typography } from '@mui/material'
import DocLogo from '../assets/doc.svg'
import PdfLogo from '../assets/pdf.svg'
import TextLogo from '../assets/txt.svg'
import FormLogo from '../assets/form.svg'
import BulkLogo from '../assets/bulk.svg'
const FeaturesPage = () => {
    return (
        <Fragment>
            <Stack gap={2}>
                <Stack direction='row' sx={{ marginTop: '6rem', padding: '0.25rem', justfyContent: 'center', alignItems: 'center', color: '#BBA055', border: '1px solid #BBA05575', borderRadius: '2rem' }}>
                    <Stack direction='column' gap={3} sx={{ padding: '2rem' }}>
                        <img src={DocLogo} alt='doc-logo' style={{ width: '2rem' }} />
                        <img src={PdfLogo} alt='pdf-logo' style={{ width: '2rem' }} />
                        <img src={TextLogo} alt='txt-logo' style={{ width: '2rem' }} />
                    </Stack>
                    <Typography variant='h4'>Supports multiple file formats</Typography>
                </Stack>
                <Stack direction='row' sx={{ justfyContent: 'center', padding: '0.25rem', alignItems: 'center', color: '#BBA055', border: '1px solid #BBA05575', borderRadius: '2rem' }}>
                    <Stack direction='column' gap={3} sx={{ padding: '2rem' }}>
                        <img src={FormLogo} alt='doc-logo' style={{ width: '5rem' }} />
                    </Stack>
                    <Typography variant='h4'>Abilitiy to select fields for matching</Typography>
                </Stack>

                <Stack direction='row' sx={{ justfyContent: 'center', padding: '0.25rem', alignItems: 'center', color: '#BBA055', border: '1px solid #BBA05575', borderRadius: '2rem' }}>
                    <Stack direction='column' gap={3} sx={{ padding: '2rem' }}>
                        <img src={BulkLogo} alt='doc-logo' style={{ width: '5rem' }} />
                    </Stack>
                    <Typography variant='h4'>Abilitiy match bulk documents </Typography>
                </Stack>
            </Stack>
        </Fragment >
    )
}

export default FeaturesPage