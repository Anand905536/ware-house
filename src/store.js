import { createStore } from 'redux';
import {
    SET_SEARCH_QUERY,
    SET_FILTER_CITY,
    SET_FILTER_CLUSTER,
    SET_FILTER_SPACE,
    FILTER_WAREHOUSE_DATA,
} from "./action";

import img1 from './assets/ware-house-1.jpg'
import img2 from './assets/warehouse-2.jpg'
import img3 from './assets/warehouse-3.jpg'
import img4 from './assets/warehouse-4.jpg'
import img5 from './assets/warehouse-5.jpg'
import img6 from './assets/warehouse-6.jpg'
import img7 from './assets/warehouse-7.jpg'
import img8 from './assets/warehouse-8.jpg'
import img9 from './assets/warehouse-9.jpg'
import img10 from './assets/warehouse-10.jpg'
import img11 from './assets/warehouse-11.jpg'
import img12 from './assets/warehouse-12.jpg'
import img13 from './assets/warehouse-13.jpg'

const initialState = {
    filteredData: [],
    searchQuery: "",
    warehouseData: [
        {
            "name": "Warehouse-165",
            "code": "W-00001",
            "img": img1,
            "id": 1,
            "city": "Delhi",
            "space_available": 1234,
            "type": "Leasable Space",
            "cluster": "cluster-a-32",
            "is_registered": true,
            "is_live": false
        },
        {
            "name": "Warehouse-276",
            "code": "W-00002",
            "img": img2,
            "id": 2,
            "city": "Chennai",
            "space_available": 124,
            "type": "Warehouse Service",
            "cluster": "cluster-a-1",
            "is_registered": true,
            "is_live": false
        },
        {
            "name": "Warehouse-3039",
            "code": "W-00003",
            "img": img3,
            "id": 3,
            "city": "Indore",
            "space_available": 124,
            "type": "Warehouse Service",
            "cluster": "cluster-a-1",
            "is_registered": true,
            "is_live": false
        },
        {
            "name": "Warehouse-324",
            "code": "W-00004",
            "img": img4,
            "id": 4,
            "city": "Chennai",
            "space_available": 12,
            "type": "Leasable Space",
            "cluster": "cluster-a-21",
            "is_registered": true,
            "is_live": false
        },
        {
            "name": "Warehouse-5454",
            "code": "W-00005",
            "img": img5,
            "id": 5,
            "city": "Chennai",
            "space_available": 1243434,
            "type": "Warehouse Service",
            "cluster": "cluster-a-21",
            "is_registered": true,
            "is_live": false
        },
        {
            "name": "Warehouse-4345",
            "code": "W-00006",
            "img": img6,
            "id": 6,
            "city": "Chennai",
            "space_available": 1,
            "type": "Leasable Space",
            "cluster": "cluster-a-21",
            "is_registered": true,
            "is_live": false
        },
        {
            "name": "Warehouse-3455",
            "code": "W-00007",
            "img": img7,
            "id": 7,
            "city": "Mumbai",
            "space_available": 4,
            "type": "Leasable Space",
            "cluster": "cluster-a-2",
            "is_registered": true,
            "is_live": false
        },
        {
            "name": "Warehouse-23455",
            "code": "W-00008",
            "img": img8,
            "id": 8,
            "city": "Bangalore",
            "space_available": 3456,
            "type": "Warehouse Service",
            "cluster": "cluster-a-21",
            "is_registered": true,
            "is_live": true
        },
        {
            "name": "Warehouse-6457",
            "code": "W-00009",
            "img": img9,
            "id": 9,
            "city": "Bangalore",
            "space_available": 1234545,
            "type": "Warehouse Service",
            "cluster": "cluster-a-1",
            "is_registered": true,
            "is_live": false
        },
        {
            "name": "Warehouse-32456",
            "code": "W-000010",
            "img": img10,
            "id": 10,
            "city": "Guwahati",
            "space_available": 121234,
            "type": "Warehouse Service",
            "cluster": "cluster-a-1",
            "is_registered": true,
            "is_live": true
        },
        {
            "name": "Warehouse-3245678",
            "code": "W-000011",
            "img": img11,
            "id": 11,
            "city": "Delhi",
            "space_available": 98,
            "type": "Leasable Space",
            "cluster": "cluster-v-2",
            "is_registered": true,
            "is_live": false
        },
        {
            "name": "Warehouse-4567",
            "code": "W-000012",
            "img": img12,
            "id": 12,
            "city": "Indore",
            "space_available": 97,
            "type": "Warehouse Service",
            "cluster": "cluster-a-1",
            "is_registered": true,
            "is_live": true
        },
        {
            "name": "Warehouse-458",
            "code": "W-000013",
            "img": img13,
            "id": 13,
            "city": "Delhi",
            "space_available": 654,
            "type": "Leasable Space",
            "cluster": "cluster-a-1",
            "is_registered": true,
            "is_live": false
        }
    ],
};

const getData = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload,
                filteredData: state.warehouseData.filter((item) =>
                    item.name.toLowerCase().includes(action.payload.toLowerCase())
                ),
            };
        case SET_FILTER_CITY:
            return {
                ...state,
                filterCity: action.payload,
            };
        case SET_FILTER_CLUSTER:
            return {
                ...state,
                filterCluster: action.payload,
            };
        case SET_FILTER_SPACE:
            return {
                ...state,
                filterSpace: action.payload,
            };
        case FILTER_WAREHOUSE_DATA:
            const { filterCity, filterCluster, filterSpace } = state;
            console.log("state", state)
            const filteredData = state.warehouseData.filter((item) => {
                if (filterCity && item.city !== filterCity) return false;
                if (filterCluster && item.cluster !== filterCluster) return false;
                if (filterSpace && parseInt(item.space_available) !== parseInt(filterSpace)) return false;
                return true;
            });
            return {
                ...state,
                filteredData,
            };
        default:
            return state;
    }
};

const store = createStore(getData);
export default store