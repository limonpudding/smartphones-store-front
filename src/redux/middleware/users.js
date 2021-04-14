import {AddUserAction, GetUsers, GetUsersAction, RemoveUserAction, SetUsers, UpdateUserAction} from "../actions/users";
import {authHeader} from "../../components/login/auth-header";

export default function usersMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetUsersAction:
                fetch("/users", {
                    headers: authHeader(),
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetUsers(response))
                )
                break;
            case AddUserAction:
                fetch("/users", {
                    method: 'POST',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    store.dispatch(new GetUsers())
                )
                break;
            case UpdateUserAction:
                fetch("/users/" + action.payload.id, {
                    method: 'PUT',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    store.dispatch(new GetUsers())
                )
                break;
            case RemoveUserAction:
                fetch("/users/" + action.payload, {
                    method: 'DELETE',
                    headers: authHeader()
                }).then(
                    store.dispatch(new GetUsers())
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}