import {GetOrdersAction, SetOrders} from "../actions/orders";

export default function ordersMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetOrdersAction:
                fetch("http://localhost:8080/purchaseOrders", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetOrders(response))
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}