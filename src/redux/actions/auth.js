import BaseAction from "../helpers/BaseAction";

export const DoLoginAction = "DoLoginAction";
export const DoRegisterAction = "DoRegisterAction";
export const SetUserDetailAction = "SetUserDetailAction";

export class DoLogin extends BaseAction {
    constructor(payload) {
        super(DoLoginAction, payload);
    }
}

export class DoRegister extends BaseAction {
    constructor(payload) {
        super(DoRegisterAction, payload);
    }
}

export class SetUserDetail extends BaseAction {
    constructor(payload) {
        super(SetUserDetailAction, payload);
    }
}
