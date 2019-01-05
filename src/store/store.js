import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from "redux-thunk"
import Constants from "../actionConstants"
import {sets} from "../reducers/setsReducer";
import {createLogger} from "redux-logger";
import cart from "../reducers/cartReducer";
import user from "../reducers/userReducer";

const initState = {
    cart: {
        modal: false,
        data: (localStorage.cartItems) ? JSON.parse(localStorage.getItem("cartItems")) : []
    } ,
    sets: {
        isFetching: false,
        isFetched: false,
        data: [],
        modal: false,
    },
    milk: [],
    meatAndFish: [],
    vegetablesAndFruits: [],
    bread: [],
    user: (localStorage.user) ? JSON.parse(localStorage.getItem("user")) : {
        email: "",
        phone: "",
        name: "",
        city: "",
        street: "",
        house: "",
        flat: "",
        floor: "",
        comment: "",
    },

    loading: false
};

const saver = store => next => action => {
    let result = next(action);
    switch (action.type) {
        case Constants.SAVE_TO_CART:
        case Constants.MINUS_IN_CART:
        case Constants.ADD_MORE_IN_CART:
        case Constants.DELETE_FROM_CART:
            localStorage["cartItems"] = JSON.stringify(store.getState().cart.data);
    }
    return result
};

const storeFactory = (initialState=initState) => {
    const middleWare = applyMiddleware(thunk, createLogger(), saver);
    return createStore(combineReducers({sets, cart, user}), initialState, middleWare)
};

export default storeFactory