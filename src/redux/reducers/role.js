import {SetRoleAction} from "../actions/role";

const initialState = {
    role: 'GUEST'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SetRoleAction: return {
            ...state,
            basket: action.payload
        }
        default:
            return state;
    }
}


