import React from 'react'
import { Stack, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';


const ListingPage = ({ val }) => {
    return (
        <Tooltip title="Go To Detail Page">
        <Stack direction="Column" className='card-component'>
            <img className="image" src={val.img} alt="Not shown" />
             <Typography variant='h5' sx={{textAlign:"center",marginTop:"10px",color:"grey"}}>
                 {val.name}
             </Typography>
        </Stack>
        </Tooltip>
    )
}

export default ListingPage