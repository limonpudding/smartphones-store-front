import BaseAction from "../helpers/BaseAction";

export const GetOrdersAction = "GetOrdersAction";
export const SetOrdersAction = "SetOrdersAction";
export const AddOrderAction = "AddOrderAction";
export const UpdateOrderAction = "UpdateOrderAction";

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

export class AddOrder extends BaseAction {
    constructor(payload) {
        super(AddOrderAction, payload);
    }
}

export class UpdateOrder extends BaseAction {
    constructor(payload) {
        super(UpdateOrderAction, payload);
    }
}