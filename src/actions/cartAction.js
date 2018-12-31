import Constants from "../actionConstants";

export const saveToCart = item => ({
    type: Constants.SAVE_TO_CART,
    item
});

export const addMore = (id) => ({
    type: Constants.ADD_MORE_IN_CART,
    id
});

export const minus = (id) => ({
    type: Constants.MINUS_IN_CART,
    id
});