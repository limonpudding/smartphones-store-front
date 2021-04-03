import {SetSmartphonesAction} from "../actions/smartphones";

const initialState = {
    smartphones: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SetSmartphonesAction: return {
            ...state,
            smartphones: action.payload
        }
        default:
            return state;
    }
}


