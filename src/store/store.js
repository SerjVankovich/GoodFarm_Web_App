import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from "redux-thunk"
import Constants from "../actionConstants"
import {sets} from "../reducers/setsReducer";
import {createLogger} from "redux-logger";

const initState = {
    cart: [],
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
    let result;
    if (action.type === Constants.SAVE_TO_CART) {
        result = next(action);
        localStorage["cart"] = JSON.stringify(store.getState().cart);
    }


    return result
};

const storeFactory = (initialState=initState) => {
    const middleWare = applyMiddleware(thunk, createLogger());
    return createStore(combineReducers({sets}), initialState, middleWare)
};

export default storeFactory