import {AddOrderAction, GetOrders, GetOrdersAction, SetOrders} from "../actions/orders";
import {authHeader} from "../../components/login/auth-header";

export default function ordersMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetOrdersAction:
                fetch("http://localhost:8080/purchaseOrders", {
                    headers: authHeader(),
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetOrders(response))
                )
                break;
            case AddOrderAction:
                fetch("http://localhost:8080/orders", {
                    method: 'post',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    store.dispatch(new GetOrders())
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}