import Constants from "../actionConstants"


export const sets = (state = {}, action) => {
    switch (action.type) {
        case Constants.WANT_DATA:
            return {
                isFetching: true,
                isFetched: false,
                data: []
            };
        case Constants.RECEIVE_DATA:
            return {
                isFetching: false,
                isFetched: true,
                data: action.data
            };
        case Constants.KNOW_MORE:
            return {
                isFetching: false,
                isFetched: true,
                data: state.data.map(item => {
                    if (item._id === action.id) {
                        item.modal = !item.modal
                    }

                    return item
                })
            };
        default: return state
    }
};