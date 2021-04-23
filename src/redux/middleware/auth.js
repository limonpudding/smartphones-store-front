import {DoLogin, DoLoginAction, DoRegisterAction, SetUserDetail} from "../actions/auth";

export default function authMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case DoLoginAction:
                fetch("http://localhost:8080/login", {
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
                        let userDetail = response;
                        sessionStorage.setItem('userDetail', JSON.stringify(userDetail));
                        store.dispatch(new SetUserDetail(userDetail));
                    }
                )
                break;
            case DoRegisterAction:
                fetch("http://localhost:8080/register", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(action.payload)
                }).then(
                    response => response.json()
                ).then(
                    () => {
                        store.dispatch(new DoLogin(action.payload));
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