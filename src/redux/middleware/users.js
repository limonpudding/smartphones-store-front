import {AddUserAction, GetUsersAction, RemoveUserAction, SetUsers, UpdateUserAction} from "../actions/users";
import {authHeader} from "../../components/login/auth-header";
import {selectUsers} from "../selectors/all";

export default function usersMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetUsersAction:
                fetch("http://localhost:8080/users", {
                    headers: authHeader(),
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetUsers(response))
                )
                break;
            case AddUserAction:
                fetch("http://localhost:8080/users", {
                    method: 'POST',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    response => response.json()
                ).then(response => {
                    let users = selectUsers(store.getState()).slice();
                    users.push(response);
                    store.dispatch(new SetUsers(users));
                });
                break;
            case UpdateUserAction:
                fetch("http://localhost:8080/users/" + action.payload.id, {
                    method: 'PUT',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    response => response.json()
                ).then(response => {
                    let users = selectUsers(store.getState()).slice();
                    let newUsers = users.map(user => user.id === response.id ? response : user);
                    store.dispatch(new SetUsers(newUsers));
                });
                break;
            case RemoveUserAction:
                fetch("http://localhost:8080/users/" + action.payload, {
                    method: 'DELETE',
                    headers: authHeader()
                }).then(() => {
                    let users = selectUsers(store.getState()).filter(user => user.id !== action.payload);
                    store.dispatch(new SetUsers(users));
                });
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}