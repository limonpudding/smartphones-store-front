import {SetUsersAction} from "../actions/users";

const initialState = {
    users: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SetUsersAction: return {
            ...state,
            users: action.payload
        }
        default:
            return state;
    }
}


