import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from "redux-thunk"
import Constants from "../actionConstants"
import {sets} from "../reducers/setsReducer";
import {createLogger} from "redux-logger";
import cart from "../reducers/cartReducer";

const initState = {
    cart: (localStorage.cartItems) ? JSON.parse(localStorage.getItem("cartItems")) : [] ,
    sets: {
        isFetching: false,
        isFetched: false,
        data: []
    },
    milk: [],
    meatAndFish: [],
    vegetablesAndFruits: [],
    bread: [],

    loading: false
};

const saver = store => next => action => {
    let result = next(action);
    if (action.type === Constants.SAVE_TO_CART) {
        localStorage["cartItems"] = JSON.stringify(store.getState().cart);
    }
    return result
};

const storeFactory = (initialState=initState) => {
    const middleWare = applyMiddleware(thunk, createLogger(), saver);
    return createStore(combineReducers({sets, cart}), initialState, middleWare)
};

export default storeFactory