import {FETCH_HOUSES, FETCH_APTS} from "./types";

export const fetchHouses = () => (dispatch) => {
    fetch("houses.json")
    .then(res=>res.json())
    .then(data=>dispatch({type:FETCH_HOUSES, payload:data.houses}))
}

export const fetchApts = () => (dispatch) => {
    fetch("apartments.json")
    .then(res=>res.json())
    .then(data=>dispatch({type:FETCH_APTS, payload:data.apartments}))
}
