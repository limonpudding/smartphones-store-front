import BaseAction from "../helpers/BaseAction";

export const GetUsersAction = "GetUsersAction";
export const SetUsersAction = "SetUsersAction";
export const AddUserAction = "AddUserAction";
export const UpdateUserAction = "UpdateUserAction";


export class GetUsers extends BaseAction {
    constructor(payload) {
        super(GetUsersAction, payload);
    }
}

export class SetUsers extends BaseAction {
    constructor(payload) {
        super(SetUsersAction, payload);
    }
}

export class AddUser extends BaseAction {
    constructor(payload) {
        super(AddUserAction, payload);
    }
}

export class UpdateUser extends BaseAction {
    constructor(payload) {
        super(UpdateUserAction, payload);
    }
}