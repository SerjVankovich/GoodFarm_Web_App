import Constants from "../actionConstants"

export default function user(state = {}, action) {
    switch (action.type) {
        case Constants.CHANGE_USER:
            state[action.field] = action.value;
            return {...state};
        default: return state
    }
}