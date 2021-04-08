import BaseAction from "../helpers/BaseAction";

export const DoLoginAction = "LoginAction";

export class DoLogin extends BaseAction {
    constructor(payload) {
        super(DoLoginAction, payload);
    }
}