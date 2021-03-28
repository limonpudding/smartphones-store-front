import {combineReducers} from 'redux';

// import partial reducers
import books from "./books";
import smartphones from "./smartphones";
import brands from "./brands";
import basket from "./basket";

/**
 * Combine and return all reducers to store
 */
export default combineReducers({
    // list of reducers
    books,
    smartphones,
    brands,
    basket

});