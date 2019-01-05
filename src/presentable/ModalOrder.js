import { connect } from 'react-redux'
import ModalUI from "../components/ModalOrder/ModalOrder";
import {toggleModal} from "../actions/cartActions";
import {changeField} from "../actions/userActions";

const ModalOrder = connect(
    state => ({
        user: state.user,
        modal: state.cart.modal,
        validation: mapUserToValidation(state.user)
    }),

    dispatch => ({
        toggleModal() { dispatch(toggleModal())},
        changeUser(field, value) { dispatch(changeField(field, value))}
    })
)(ModalUI);

const mapUserToValidation = (user) => {
    const validation = {};

    for (const key in user) {
        validation[key] = !!simpleValidation(user[key]);
    }
    return validation
};

const simpleValidation = (item) => item.length > 1;

export default ModalOrder