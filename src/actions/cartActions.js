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

export const deleteItem = (id) => ({
    type: Constants.DELETE_FROM_CART,
    id
});

export const toggleModal = () => ({
    type: Constants.TOGGLE_MODAL_CART
});

export const completeOrder = () => ({
    type: Constants.COMPLETE_ORDER,
});

export const sendOrder = (user, cart) => ({
    type: Constants.SEND_ORDER,
    user,
    cart
});