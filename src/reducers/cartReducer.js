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

const cart = (state = {}, action) => {
    switch (action.type) {
        case Constants.SAVE_TO_CART:
            if (!state.data.some(item => item._id === action.item._id)) {
                action.item.count = 1;
                return {
                    data: [...state.data, action.item],
                    modal: false
                };
            } else {
                return state
            }
        case Constants.ADD_MORE_IN_CART:
            return {
                data: state.data.map(item => item._id === action.id ? oneItem(item, action) : item),
                modal: false
            };
        case Constants.MINUS_IN_CART:
            return {
                data: state.data.map(item => item._id === action.id ? oneItem(item, action) : item),
                modal: false
            };
        case Constants.DELETE_FROM_CART:
            return {
                data: state.data.filter(item => item._id !== action.id),
                modal: false
            };
        case Constants.TOGGLE_MODAL_CART:
            return {
                data: state.data,
                modal: !state.modal
            };
        case Constants.COMPLETE_ORDER:
            return {
                data: state.data,
                modal: true
            };

        default: return state
    }
};

export default cart