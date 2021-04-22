import {
    AddSmartphoneAction,
    EditSmartphoneAction,
    GetSmartphonesAction, RemoveSmartphoneAction,
    SetSmartphones
} from "../actions/smartphones";
import {authHeader} from "../../components/login/auth-header";
import {selectSmartphones} from "../selectors/all";

export default function smartphonesMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetSmartphonesAction:
                // Метод без параметров
                fetch("http://localhost:8080/smartphones", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetSmartphones(response))
                )
                break;
            case AddSmartphoneAction:
                // В этот метод поступает полный объект smartphone со всеми полями
                fetch("http://localhost:8080/smartphones", {
                    method: 'POST',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    response => response.json()
                ).then(response => {
                    let smartphones = selectSmartphones(store.getState()).slice();
                    smartphones.push(response);
                    store.dispatch(new SetSmartphones(smartphones));
                });
                break;
            case EditSmartphoneAction:
                // В этот метод поступает полный объект smartphone со всеми полями
                fetch("http://localhost:8080/smartphones/" + action.payload.id, {
                    method: 'PUT',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    response => response.json()
                ).then(response => {
                    let smartphones = selectSmartphones(store.getState()).slice();
                    let newSmartphones = smartphones.map(smartphone => smartphone.id === response.id ? response : smartphone);
                    store.dispatch(new SetSmartphones(newSmartphones));
                });
                break;
            case RemoveSmartphoneAction:
                // В этот метод поступает только id
                fetch("http://localhost:8080/smartphones/" + action.payload, {
                    method: 'DELETE',
                    headers: authHeader()
                }).then(() => {
                    let smartphones = selectSmartphones(store.getState()).filter(smartphone => smartphone.id !== action.payload);
                    store.dispatch(new SetSmartphones(smartphones));
                });
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}