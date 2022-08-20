import React from "react";
import { Box } from '@mui/material'
import ScaleLoader from "react-spinners/ScaleLoader";


function Loader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ScaleLoader color='#BBA055' loading='true' size={150} />
        </Box>
    );
}

export default Loader;