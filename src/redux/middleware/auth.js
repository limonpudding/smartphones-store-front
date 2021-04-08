import {DoLoginAction} from "../actions/auth";
import {SetRole} from "../actions/role";

export default function authMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case DoLoginAction:
                fetch("/login", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(action.payload)
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetRole(response))
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}