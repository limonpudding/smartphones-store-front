import BaseAction from "../helpers/BaseAction";

/**
 * List of actions
 * @type {string}
 */
export const SetBasketAction = "SetBasketAction";

/**
 * SetBasket action class
 */
export class SetBasket extends BaseAction {
    constructor(payload) {
        super(SetBasketAction, payload);
    }
}