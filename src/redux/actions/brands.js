import BaseAction from "../helpers/BaseAction";

/**
 * List of actions
 * @type {string}
 */
export const GetBrandsAction = "GetBrandsAction";
export const SetBrandsAction = "SetBrandsAction";

/**
 * GetBrands action class
 */
export class GetBrands extends BaseAction {
    constructor(payload = {}) {
        super(GetBrandsAction, payload);
    }
}

/**
 * SetBrands action class
 */
export class SetBrands extends BaseAction {
    constructor(payload) {
        super(SetBrandsAction, payload);
    }
}