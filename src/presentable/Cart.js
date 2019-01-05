import { connect } from "react-redux"
import {addMore, minus, deleteItem, toggleModal} from "../actions/cartActions";
import CartUI from "../components/NewCart/Cart";

const Cart = connect(
    state => ({
        modal: state.cart.modal,
        items: state.cart.data,
    }),

    dispatch => ({
        addMore(id) { dispatch(addMore(id)) },
        minusOne(id) { dispatch(minus(id))},
        deleteOne(id) { dispatch(deleteItem(id))},
        toggleModal() { dispatch(toggleModal())}
    })
)(CartUI);

export default Cart