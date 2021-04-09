import {combineReducers} from 'redux';

import smartphones from "./smartphones";
import brands from "./brands";
import basket from "./basket";
import orders from "./orders";
import userDetail from "./user-detail";

export default combineReducers({
    smartphones,
    brands,
    basket,
    orders,
    userDetail
});