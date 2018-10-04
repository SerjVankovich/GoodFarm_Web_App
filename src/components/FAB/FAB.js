import React from 'react';
import './FAB.css'
import cart2 from './cart2.png';
import { withRouter, Link } from 'react-router-dom';

class FloatingActionButton extends React.Component {

    render() {
        return (
            <div className="myButton" ><Link to="/cart"><img alt="cart" src={cart2} className="cartPicture"/></Link></div>
        )
    }


}

export default withRouter(FloatingActionButton);