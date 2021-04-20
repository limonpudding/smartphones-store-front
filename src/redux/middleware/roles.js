import {authHeader} from "../../components/login/auth-header";
import {GetRolesAction, SetRoles} from "../actions/roles";

export default function rolesMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetRolesAction:
                fetch("http://localhost:8080/roles", {
                    headers: authHeader(),
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetRoles(response))
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}