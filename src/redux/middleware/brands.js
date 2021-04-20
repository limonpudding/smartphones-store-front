import {AddBrandAction, GetBrandsAction, SetBrands, UpdateBrandAction} from "../actions/brands";
import {authHeader} from "../../components/login/auth-header";
import {selectBrands} from "../selectors/all";

export default function brandsMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetBrandsAction:
                fetch("http://localhost:8080/brands", {
                    headers: authHeader(),
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetBrands(response))
                )
                break;
            case AddBrandAction:
                fetch("http://localhost:8080/brands", {
                    method: 'POST',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    response => response.json()
                ).then(response => {
                    let brands = selectBrands(store.getState()).slice();
                    brands.push(response);
                    store.dispatch(new SetBrands(brands));
                });
                break;
            case UpdateBrandAction:
                fetch("http://localhost:8080/brands/" + action.payload.id, {
                    method: 'PUT',
                    headers: authHeader(),
                    body: JSON.stringify(action.payload)
                }).then(
                    response => response.json()
                ).then(response => {
                    let brands = selectBrands(store.getState()).slice();
                    let newBrands = brands.map(brand => brand.id === response.id ? response : brand);
                    store.dispatch(new SetBrands(newBrands));
                });
                break;
        }

        next({
            type: action.type,
            payload: action.payload
        })
    }
}