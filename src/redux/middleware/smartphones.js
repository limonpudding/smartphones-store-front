import {AddSmartphoneAction, GetSmartphones, GetSmartphonesAction, SetSmartphones} from "../actions/smartphones";

export default function smartphonesMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetSmartphonesAction:
                fetch("/smartphones", {
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
            case AddSmartphoneAction:
                fetch("/smartphones", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
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