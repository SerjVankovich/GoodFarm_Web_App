import Constants from "../actionConstants"

const fetchThenDispatch = (dispatch, url, method, body) => {
    dispatch(wantData());
    fetch(url,
        {
            method,
            body
        })
        .then(res => res.ok ? res.json() : undefined)
        .then(json => dispatch(receiveData(json)))
        .catch(err => console.error(err))
};

export const knowMore = id => ({
    type: Constants.KNOW_MORE,
    id
});

export const wantData = () => ({
    type: Constants.WANT_DATA
});

export const getData = url => dispatch => fetchThenDispatch(dispatch, url, "GET", null);

export const receiveData = (data) => ({
    type: Constants.RECEIVE_DATA,
    data
});