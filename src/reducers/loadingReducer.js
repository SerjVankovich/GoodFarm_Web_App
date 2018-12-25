import Constants from "../actionConstants"

export const loading = (state = false, action) => {
    switch (action.type) {
        case Constants.WANT_DATA:
            return true;
        case Constants.RECEIVE_DATA:
            return false;
        default:
            return false
    }
}