import {SetUserDetailAction} from "../actions/auth";

const initialState = {

    userDetail: sessionStorage.getItem('userDetail') ? JSON.parse(sessionStorage.getItem('userDetail')) :
        {
            id: '',
            userName: '',
            roles: ['GUEST'],
            token: ''
        }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SetUserDetailAction: return {
            ...state,
            userDetail: action.payload
        }
        default:
            return state;
    }
}


