import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Card, Stack, Typography } from '@mui/material';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material'
import './detail.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Tooltip from '@mui/material/Tooltip';


const Detail = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    console.log("location")
  }, [])
  return (
    <>
      <Tooltip title="Go Back To Listing Page">
        <KeyboardBackspaceIcon title="Go back to listing page" sx={{ fontSize: 40 }} onClick={() => navigate('/')}
          style={{ cursor: "pointer", marginLeft: "20px", marginTop: "20px" }} />
      </Tooltip>

      <Stack className='main-box' direction="Row" sx={{
        display: "flex", flexWrap: "wrap",
        backgroundColor: "#e2e2e3", height: "500px",
        marginLeft: { xs: "20px", sm: "50px", md: "100px", lg: "250px" },
        marginRight: { xs: "20px", sm: "50px", md: "100px", lg: "150px" },
        marginTop: { xs: "10px", sm: "20px", md: "40px", lg: "60px" },
        marginBottom: { xs: "20px", sm: "50px", md: "100px", lg: "150px" },
      }}>
        <Box sx={{ backgroundColor: "#e2e2e3" }} className="image-box">
          <Typography variant='h4' style={{ marginTop: "30px" }}>
            Image
          </Typography>
          <img className="image-detail" src={location.state.img} alt="Not shown" />
        </Box>
        <Box className="detail-box" sx={{
          backgroundColor: "#e2e2e3",
          paddingLeft: "100px", paddingRight: "100px", paddingTop: "20px", paddingBottum: "20px",
        }}>
          <Typography variant='h6' style={{ display: "flex", justifyContent: "space-evenly", width: "350px" }}>
            <p>Name</p>:<p>{location.state.name}</p>
          </Typography>
          <Typography variant='h6' style={{ display: "flex", justifyContent: "space-around", width: "350px" }}>
            <p>Code</p> : <p>{location.state.code}</p>
          </Typography>
          <Typography variant='h6' style={{ display: "flex", justifyContent: "space-around", width: "350px" }}>
            <p>Id</p> : <p>{location.state.id}</p>
          </Typography>
          <Typography variant='h6' style={{ display: "flex", justifyContent: "space-around", width: "350px" }}>
            <p>City</p>:<p>{location.state.city}</p>
          </Typography>
          <Typography variant='h6' style={{ display: "flex", justifyContent: "space-evenly", width: "350px" }}>
            <p>Space Available</p>:<p>{location.state.space_available}</p>
          </Typography>
          <Typography variant='h6' style={{ display: "flex", justifyContent: "space-evenly", width: "350px" }}>
            <p>Type</p>:<p>{location.state.type}</p>
          </Typography>
          <Typography variant='h6' style={{ display: "flex", justifyContent: "space-evenly", width: "350px" }}>
            <p>Cluster</p>:<p>{location.state.cluster}</p>
          </Typography>
          <Typography variant='h6' style={{ display: "flex", justifyContent: "space-around", width: "350px" }}>
            <p>Is Registered</p>:<p>{location.state.is_registered.toString()}</p>
          </Typography>
          <Typography variant='h6' style={{ display: "flex", justifyContent: "space-evenly", width: "350px" }}>
            <p>Is Live</p>: <p>{location.state.is_live.toString()}</p>
          </Typography>
        </Box>
      </Stack>
    </>
  )
}

export default Detail