import { Button, Stack, Box } from '@mui/material'
import { SendRounded } from '@mui/icons-material'
import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const ContactPage = () => {
    const initialState = { firstName: '', lastName: '', email: '', message: '' }
    const [formValues, setFormValues] = useReducer((currentVals, newVals) => ({ ...currentVals, ...newVals }), initialState)

    const { firstName, lastName, email, message } = formValues

    const navigate = useNavigate()
    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues({ [name]: value })
    }
    const handleSubmit = () => {
        console.log(formValues)
        navigate('/')
    }
    return (
        <Stack gap={2} >
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, marginTop: '4rem' }} gap={2} >
                <Stack >
                    <label style={{ color: '#BBA055' }}>First Name</label>
                    <input required placeholder='First Name' name='firstName' value={firstName}
                        onChange={handleChange}
                        style={{ fontSize: '1.2em', height: '2.4rem', outline: 'none' }} />
                </Stack>
                <Stack>
                    <label style={{ color: '#BBA055' }}>Last Name</label>
                    <input required placeholder='Last Name' name='lastName' value={lastName}
                        onChange={handleChange}
                        style={{ fontSize: '1.2em', height: '2.4rem', outline: 'none' }} />
                </Stack>
            </Box>
            <Stack sx={{ marginBottom: '1rem' }}>
                <label style={{ color: '#BBA055' }}>Email</label>
                <input required placeholder='E-mail' type='email' name='email' value={email}
                    onChange={handleChange}
                    style={{ fontSize: '1.2em', height: '2.4rem', outline: 'none' }} />
            </Stack>
            <Stack sx={{ marginBottom: '1rem' }}>
                <label style={{ color: '#BBA055' }}>Message</label>
                <textarea rows='10' cols="25" placeholder='Your message. . .' name='message' value={message}
                    onChange={handleChange}
                    style={{ fontSize: '1.2em', outline: 'none', resize: 'none' }} />
            </Stack>
            <Button variant='contained' size='large' endIcon={<SendRounded />} onClick={handleSubmit}>Send</Button>
        </Stack >
    )
}

export default ContactPage