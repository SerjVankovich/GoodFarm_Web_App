import { connect } from 'react-redux'
import SetsUI from "../components/Sets"
import {saveToCart} from "../actions/cartAction";
import {getData} from "../actions/listAction";

const Sets = connect(
    state => ({
        isFetching: state.sets.isFetching,
        isFetched: state.sets.isFetched,
        sets: state.sets.data
    }),

    dispatch => ({
        saveToCart(item) { dispatch(saveToCart(item)) },
        wantData(url) { dispatch(getData(url))},
    })
)(SetsUI);

export default Sets