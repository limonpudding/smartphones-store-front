import {SetRolesAction} from "../actions/roles";

const initialState = {
    roles: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SetRolesAction: return {
            ...state,
            roles: action.payload
        }
        default:
            return state;
    }
}


