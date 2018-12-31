import { connect } from "react-redux"
import {addMore, minus} from "../actions/cartAction";
import CartUI from "../components/NewCart/Cart";

const Cart = connect(
    state => ({
        items: state.cart
    }),

    dispatch => ({
        addMore(id) { dispatch(addMore(id)) },
        minusOne(id) { dispatch(minus(id))}
    })
)(CartUI);

export default Cart