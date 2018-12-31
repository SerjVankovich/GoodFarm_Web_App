import Constants from "../actionConstants"

const oneItem = (state = {}, action) => {
    switch (action.type) {
        case Constants.ADD_MORE_IN_CART:
            state.count = state.count ? state.count + 1 : 1;
            return state;
        case Constants.MINUS_IN_CART:
            state.count -= 1;
            return state;

        default: return state
    }
};

const cart = (state = [], action) => {
    switch (action.type) {
        case Constants.SAVE_TO_CART:
            if (!state.some(item => item._id === action.item._id)) {
                action.item.count = 1;
                return [...state, action.item];
            } else {
                return state
            }
        case Constants.ADD_MORE_IN_CART:
            return state.map(item => item._id === action.id ? oneItem(item, action) : item);
        case Constants.MINUS_IN_CART:
            return state.map(item => item._id === action.id ? oneItem(item, action) : item);
        default: return state
    }
};

export default cart