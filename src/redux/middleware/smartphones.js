import {
    AddSmartphoneAction,
    EditSmartphoneAction,
    GetSmartphones,
    GetSmartphonesAction,
    SetSmartphones
} from "../actions/smartphones";
import {authHeader} from "../../components/login/auth-header";

export default function smartphonesMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetSmartphonesAction:
                fetch("/smartphones", {
                    headers: authHeader(),
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetSmartphones(response))
                )
                break;
            case AddSmartphoneAction:
                fetch("/smartphones", {
                    method: 'POST',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    store.dispatch(new GetSmartphones())
                )
                break;
            case EditSmartphoneAction:
                fetch("/smartphones/" + action.payload.id, {
                    method: 'PUT',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    store.dispatch(new GetSmartphones())
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}