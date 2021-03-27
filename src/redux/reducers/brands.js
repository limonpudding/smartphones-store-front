import {SetBrandsAction} from "../actions/brands";

/**
 * initial state of the book list
 * @type {{brands: []}}
 */
const initialState = {
    brands: []
}

/**
 * The reducer function
 * @param state
 * @param action
 */
export default function (state = initialState, action) {
    switch (action.type) {
        case SetBrandsAction: return {
            ...state,
            brands: action.payload
        }
        default:
            return state;
    }
}


