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
        default: return state
    }
}