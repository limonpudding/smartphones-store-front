import {SetSmartphonesAction} from "../actions/smartphones";

/**
 * initial state of the book list
 * @type {{smartphones: []}}
 */
const initialState = {
    smartphones: []
}

/**
 * The reducer function
 * @param state
 * @param action
 */
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


