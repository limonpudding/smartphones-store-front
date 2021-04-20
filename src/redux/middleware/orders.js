import {
    AddOrderAction,
    GetOrders,
    GetOrdersAction,
    GetOrdersByUserAction,
    SetOrders,
    UpdateOrderAction
} from "../actions/orders";
import {authHeader} from "../../components/login/auth-header";
import {SetBasket} from "../actions/basket";
import {selectBrands} from "../selectors/all";
import {SetBrands} from "../actions/brands";

export default function ordersMiddleware() {
    return store => next => action => {
        switch (action.type) {
            // TODO пееределать методы так, чтобы не тянуть каждый раз все данные из БД
            case GetOrdersAction:
                fetch("http://localhost:8080/purchaseOrders", {
                    headers: authHeader(),
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetOrders(response))
                )
                break;
            case GetOrdersByUserAction:
                fetch("http://localhost:8080/purchaseOrders/user/" + store.getState().userDetail.userDetail.userName, {
                    headers: authHeader(),
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetOrders(response))
                )
                break;
            case AddOrderAction:
                fetch("http://localhost:8080/purchaseOrders", {
                    method: 'POST',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    store.dispatch(new GetOrders())
                )
                break;
            case UpdateOrderAction:
                fetch("http://localhost:8080/purchaseOrders/submit/"+action.payload.id, {
                    method: 'PUT',
                    headers: authHeader()
                }).then(
                    response => response.json()
                ).then(response => {
                    let orders = selectBrands(store.getState()).slice();
                    let newOrders = orders.map(order => order.id === response.id ? response : order);
                    store.dispatch(new SetOrders(newOrders));
                });
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}