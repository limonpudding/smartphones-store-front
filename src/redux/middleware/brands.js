import {AddBrandAction, GetBrands, GetBrandsAction, SetBrands} from "../actions/brands";

export default function brandsMiddleware() {
    return store => next => action => {
        switch (action.type) {
            case GetBrandsAction:
                fetch("http://localhost:8080/brands", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then(
                    response => response.json()
                ).then(
                    response => store.dispatch(new SetBrands(response))
                )
                break;
            case AddBrandAction:
                fetch("http://localhost:8080/brands", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
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