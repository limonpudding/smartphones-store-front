import BaseAction from "../helpers/BaseAction";

export const GetOrdersAction = "GetOrdersAction";
export const SetOrdersAction = "SetOrdersAction";

export class GetOrders extends BaseAction {
    constructor(payload = {}) {
        super(GetOrdersAction, payload);
    }
}

export class SetOrders extends BaseAction {
    constructor(payload) {
        super(SetOrdersAction, payload);
    }
}