import BaseAction from "../helpers/BaseAction";

export const SetRoleAction = "SetRoleAction";

export class SetRole extends BaseAction {
    constructor(payload) {
        super(SetRoleAction, payload);
    }
}