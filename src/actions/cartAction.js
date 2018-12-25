import Constants from "../actionConstants";

export const saveToCart = item => ({
    type: Constants.SAVE_TO_CART,
    item
});