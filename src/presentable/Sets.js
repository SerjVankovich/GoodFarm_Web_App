import { connect } from 'react-redux'
import SetsUI from "../components/Sets"
import {saveToCart} from "../actions/cartActions";
import {getData, knowMore} from "../actions/listActions";

const Sets = connect(
    state => ({
        isFetching: state.sets.isFetching,
        isFetched: state.sets.isFetched,
        sets: state.sets.data
    }),

    dispatch => ({
        saveToCart(item) { dispatch(saveToCart(item)) },
        wantData(url) { dispatch(getData(url))},
        toggleModal(id) { dispatch(knowMore(id))}
    })
)(SetsUI);

export default Sets