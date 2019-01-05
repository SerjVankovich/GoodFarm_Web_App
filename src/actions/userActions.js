import Constants from "../actionConstants";

export const validate = (user) => ({
    type: Constants.VALIDATE_USER,
    user
});

export const changeField = (field, value) => ({
    type: Constants.CHANGE_USER,
    field,
    value
});