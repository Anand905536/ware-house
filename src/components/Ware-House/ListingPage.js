import React from 'react'
import { Stack, Typography } from '@mui/material';

const ListingPage = ({ val }) => {
    return (
        <Stack direction="Column" className='card-component'>
            <img className="image" src={val.img} alt="Not shown" />
             <Typography variant='h5' sx={{textAlign:"center",marginTop:"10px",color:"grey"}}>
                 {val.name}
             </Typography>
        </Stack>
    )
}

export default ListingPage