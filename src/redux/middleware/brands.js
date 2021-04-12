import {AddBrandAction, GetBrands, GetBrandsAction, SetBrands, UpdateBrandAction} from "../actions/brands";
import {authHeader} from "../../components/login/auth-header";

export default function brandsMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetBrandsAction:
                fetch("/brands", {
                    headers: authHeader(),
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetBrands(response))
                )
                break;
            case AddBrandAction:
                fetch("/brands", {
                    method: 'POST',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    store.dispatch(new GetBrands())
                )
                break;
            case UpdateBrandAction:
                fetch("/brands/" + action.payload.id, {
                    method: 'PUT',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    store.dispatch(new GetBrands())
                )
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}