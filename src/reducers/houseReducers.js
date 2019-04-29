import {FETCH_HOUSES, FETCH_APTS} from "../actions/types";

const initialState = {
    houseItems:[],
    houseItem:{},
    aptItems:[],
    aptItem:{}
}

export default function(state=initialState, action)
{
    switch(action.type)
    {
        case FETCH_HOUSES:
        return{
            ...state,
            houseItems:action.payload
        }

        case FETCH_APTS:
        return{
            ...state,
            aptItems:action.payload
        }

        default:
        return state;
    }
}