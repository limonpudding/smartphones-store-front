import BaseAction from "../helpers/BaseAction";

export const GetBrandsAction = "GetBrandsAction";
export const SetBrandsAction = "SetBrandsAction";
export const AddBrandAction = "AddBrandAction";

export class GetBrands extends BaseAction {
    constructor(payload) {
        super(GetBrandsAction, payload);
    }
}

export class SetBrands extends BaseAction {
    constructor(payload) {
        super(SetBrandsAction, payload);
    }
}

export class AddBrand extends BaseAction {
    constructor(payload) {
        super(AddBrandAction, payload);
    }
}