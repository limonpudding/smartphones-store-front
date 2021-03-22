import BaseAction from "../helpers/BaseAction";

/**
 * List of actions
 * @type {string}
 */
export const GetSmartphonesAction = "GetSmartphonesAction";
export const SetSmartphonesAction = "SetSmartphonesAction";

/**
 * GetSmartphones action class
 */
export class GetSmartphones extends BaseAction {
    constructor(payload = {}) {
        super(GetSmartphonesAction, payload);
    }
}

/**
 * SetSmartphones action class
 */
export class SetSmartphones extends BaseAction {
    constructor(payload) {
        super(SetSmartphonesAction, payload);
    }
}