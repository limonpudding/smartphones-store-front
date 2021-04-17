import {SetBasketAction} from "../actions/basket";

const initialState = {
    basket: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SetBasketAction: return {
            ...state,
            basket: action.payload
        }
        default:
            return state;
    }
}


