import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Card, Stack, Typography } from '@mui/material';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material'
import './warehouse.css'
import ListingPage from './ListingPage';

const WareHouse = () => {
    // const data = useSelector(state => state.warehouseData);
    const [filterCity, setFilterCity] = useState(["Delhi", "Chennai", "Mumbai", "Indore", "Bengluru", "Guwahati"])
    const [filterCluster, setFilterCluster] = useState(["cluster-a-32", "cluster-a-1", "cluster-a-21", "cluster-a-2", "cluster-v-2"])
    const [filterBySpace, setFilterBySpace] = useState(["1234", "124", "12", "1243434", "1", "4", "3456", "1234545", "121234", "98", "97", "654"])
    const [city, setCity] = useState("")
    const [cluster, setCluster] = useState("")
    const [space, setSpace] = useState("")
    const [data, setData] = useState([])

    return (
        <>
            <Stack direction="Column" spacing={2} className='main-container' style={{ color: "white", height: "500px", display: "flex", alignItems: "center" }}>
                <Typography variant='h3' style={{ marginTop: "70px", textAlign: "center" }} >
                    Warehouse Data
                </Typography>
                <TextField style={{ backgroundColor: "white", marginTop: "20px", textAlign: "center" }} className="input-box" label="Search Ware-House" variant="outlined" />

                <Stack className="filter-with-heading" direction="Column" spacing={2} style={{ width: "80%", display: "flex", justifyContent: "space-evenly", marginTop: "70px" }}>
                    <Typography variant='h4'>
                        Search By Filter
                    </Typography>
                    <Stack direction="Row" spacing={2} className="filter">
                        <FormControl className="filter-city">

                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                                style={{ backgroundColor: "white" }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={city}
                                label="City"
                                onChange={(e) => setCity(e.target.value)}
                            >
                                {filterCity.map((data, idx) => (
                                    <MenuItem key={idx} value={data}>{data}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <FormControl className="filter-cluster">
                            <InputLabel id="demo-simple-select-label">Cluster</InputLabel>
                            <Select
                                style={{ backgroundColor: "white" }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={cluster}
                                label="Cluster"
                                onChange={(e) => setCluster(e.target.value)}
                            >
                                {filterCluster.map((data, idx) => (
                                    <MenuItem key={idx} value={data}>{data}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <FormControl className="filter-space">
                            <InputLabel id="demo-simple-select-label">Space available limit</InputLabel>
                            <Select
                                style={{ backgroundColor: "white" }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={space}
                                label="Available Space limit"
                                onChange={(e) => setSpace(e.target.value)}
                            >
                                {filterBySpace.map((data, idx) => (
                                    <MenuItem key={idx} value={data}>{data}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                </Stack>
            </Stack>

            {
                data.length > 0 ? data.map((val, idx) => {
                    return (<ListingPage />)
                })
                    :
                    <Typography variant='h4' style={{ marginTop: "100px", textAlign: "center", color: "black" }}>
                        No data available
                    </Typography>
            }
        </>
    )
}

export default WareHouse