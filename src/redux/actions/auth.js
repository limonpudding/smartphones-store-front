import BaseAction from "../helpers/BaseAction";

export const DoLoginAction = "DoLoginAction";
export const SetUserDetailAction = "SetUserDetailAction";

export class DoLogin extends BaseAction {
    constructor(payload) {
        super(DoLoginAction, payload);
    }
}

export class SetUserDetail extends BaseAction {
    constructor(payload) {
        super(SetUserDetailAction, payload);
    }
}
