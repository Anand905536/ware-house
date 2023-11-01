import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Card, Stack, Typography } from '@mui/material';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material'
import './detail.css';

const Detail = () => {
  const location = useLocation()

  useEffect(() => {
    console.log("location", location)
  }, [])
  return (
    <Stack className='main-box' direction="Row" sx={{
      display:"flex",flexWrap:"wrap",
      backgroundColor: "red", height: "500px",
      marginLeft: { xs: "20px", sm: "50px", md: "100px", lg: "150px" },
      marginRight: { xs: "20px", sm: "50px", md: "100px", lg: "150px" },
      marginTop: { xs: "20px", sm: "50px", md: "100px", lg: "150px" },
      marginBottom: { xs: "20px", sm: "50px", md: "100px", lg: "150px" },
    }}>
      <Box sx={{ backgroundColor: "green" }} className="image-box">
        <img className="image-detail" src={location.state.img} alt="Not shown" />
      </Box>
      <Box className="detail-box" sx={{
        backgroundColor: "purple",
        paddingLeft: "100px", paddingRight: "100px", paddingTop: "20px", paddingBottum: "20px",
      }}>
        <Typography variant='h6' style={{ display: "flex", }}>
          <p>Name</p>  --  {location.state.name}
        </Typography>
        <Typography variant='h6' style={{ display: "flex" }}>
          <p>Code</p>  --  {location.state.code}
        </Typography>
        <Typography variant='h6' style={{ display: "flex" }}>
          <p>Id</p> --  {location.state.id}
        </Typography>
        <Typography variant='h6' style={{ display: "flex" }}>
          <p>City</p>{location.state.city}
        </Typography>
        <Typography variant='h6' style={{ display: "flex" }}>
          <p>Space Available</p>{location.state.space_available}
        </Typography>
        <Typography variant='h6' style={{ display: "flex" }}>
          <p>Type</p>{location.state.type}
        </Typography>
        <Typography variant='h6' style={{ display: "flex" }}>
          <p>Cluster</p>{location.state.cluster}
        </Typography>
        <Typography variant='h6' style={{ display: "flex" }}>
          <p>Is Registered</p>{toString(location.state.is_registered)}
        </Typography>
        <Typography variant='h6' style={{ display: "flex" }}>
          <p>Is Live</p>{toString(location.state.is_live)}
        </Typography>
      </Box>
    </Stack>
  )
}

export default Detail