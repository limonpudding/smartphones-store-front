import BaseAction from "../helpers/BaseAction";

export const GetRolesAction = "GetRolesAction";
export const SetRolesAction = "SetRolesAction";

export class GetRoles extends BaseAction {
    constructor(payload) {
        super(GetRolesAction, payload);
    }
}

export class SetRoles extends BaseAction {
    constructor(payload) {
        super(SetRolesAction, payload);
    }
}