import {DoLoginAction, SetUserDetail} from "../actions/auth";

export default function authMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case DoLoginAction:
                fetch("/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(action.payload)
                }).then(
                    response => response.json()
                ).then(
                    response => {
                        let userDetail = {
                            userName: action.payload.userName,
                            basic: btoa(action.payload.userName + ':' + action.payload.password),
                            role: response
                        };
                        sessionStorage.setItem('userDetail', JSON.stringify(userDetail));
                        store.dispatch(new SetUserDetail(userDetail));
                    }
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}