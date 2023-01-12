import { BILL_ACTION_TYPES } from "./bill.types"

const initialState = {
    bills: [],
    category:""
}

const billReducers = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case BILL_ACTION_TYPES.ADD_BILL:
            return {
                ...state,
                bills: payload
            }
        case BILL_ACTION_TYPES.EDIT_BILL:
            return {
                ...state,
                bills: payload
            }
        case BILL_ACTION_TYPES.DELETE_BILL:
            return {
                ...state,
                bills: payload
            }
        case BILL_ACTION_TYPES.FILTER_BILL:
            return{
                ...state,
                category:payload
            }    
        default:
            return state
    }
}

export default billReducers