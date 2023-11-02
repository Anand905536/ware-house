import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery, setCityFilter, setClusterFilter, setSpaceFilter, filterWarehouseData } from '../../action';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material'
import './warehouse.css'
import ListingPage from './ListingPage';
import { useNavigate } from 'react-router-dom';

const WareHouse = () => {
    let data = useSelector((state) => state.warehouseData);
    const filterCity = ["Delhi", "Chennai", "Mumbai", "Indore", "Bengluru", "Guwahati"];
    const filterCluster = ["cluster-a-32", "cluster-a-1", "cluster-a-21", "cluster-a-2", "cluster-v-2"];
    const filterBySpace = ["1234", "124", "12", "1243434", "1", "4", "3456", "1234545", "121234", "98", "97", "654"];
    const [city, setCity] = useState("");
    const [cluster, setCluster] = useState("");
    const [space, setSpace] = useState("");
    const navigate = useNavigate();
    const [searchItem, setSearchItem] = useState("");
    const dispatch = useDispatch();
    const filteredData = useSelector((state) => state.filteredData);
  
    const searchHandler = () => {
      dispatch(setSearchQuery(searchItem));
    };
  
    const apply = () => {
      dispatch(setCityFilter(city));
      dispatch(setClusterFilter(cluster));
      dispatch(setSpaceFilter(space));
      dispatch(filterWarehouseData());
    };
  
    useEffect(() => {
      dispatch(setSearchQuery(""));
      dispatch(filterWarehouseData(data));
    }, [data, searchItem]);

    return (
        <>
            <Stack direction="Column" spacing={2} className='main-container' style={{ color: "white", height: "500px", display: "flex", alignItems: "center", marginBottom: "100px" }}>
                <Typography variant='h3' style={{ marginTop: "70px", textAlign: "center" }} >
                    Warehouse Data
                </Typography>
                <TextField onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        searchHandler()
                    }
                }}
                    value={searchItem} onChange={(e) => setSearchItem(e.target.value)}
                    style={{ backgroundColor: "white", marginTop: "20px", textAlign: "center" }}
                    className="input-box" label="Search Ware-House" variant="outlined" />

                <Stack className="filter-with-heading" direction="Column" spacing={2} style={{ width: "80%", display: "flex", justifyContent: "space-evenly", marginTop: "70px" }}>
                    <Typography variant='h4'>
                        Search By Filter
                    </Typography>
                    <Stack direction="Row" spacing={3} className="filter">
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

                        <Button onClick={apply} style={{ backgroundColor: "black", color: "white" }}>Apply</Button>
                    </Stack>
                </Stack>
            </Stack>
            {
                filteredData.length > 0 ? (
                    <div className="listing-container">
                        {filteredData.map((val, idx) => (
                            <>
                                <div key={idx} className="listing-page" style={{ cursor: "pointer" }}
                                    onClick={() => navigate('/Details-page-12345', { state: val })} >
                                    <ListingPage val={val} />
                                </div>
                            </>
                        ))}
                    </div>
                ) : (
                    <Typography variant='h4' style={{ textAlign: "center" }}>
                        No data available
                    </Typography>
                )
            }
        </>
    )
}

export default WareHouse