import {SetOrdersAction} from "../actions/orders";

const initialState = {
    orders: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SetOrdersAction: return {
            ...state,
            orders: action.payload
        }
        default:
            return state;
    }
}


