import {GetSmartphonesAction, SetSmartphones} from "../actions/smartphones";

export default function smartphonesMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetSmartphonesAction:
                fetch("http://localhost:8080/smartphones", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetSmartphones(response))
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}