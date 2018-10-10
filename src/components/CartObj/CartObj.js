import React from 'react';
import './CartObj.css';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
} from 'reactstrap';
import {encode} from '../../helpers/encoder'
import CartModal from "./CartModal";

class CartObj extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false
        };
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    render()  {
        const { obj, saveToCart} = this.props;
        const { modal } = this.state;
        let imageUrl;
        if (obj.image) {
            imageUrl = "data:image/png;base64," + encode(obj.image.data);
        } else {
            imageUrl = ""
        }
        return (
            <div>
                <Card className="card" >
                    <CardImg className="img-rounded pointer" onClick={this.toggleModal} top width="100%" src={imageUrl} alt="Set image"/>
                    <CardBody>
                        <div className="set-box-price">{obj.price} руб.</div>
                        <CardTitle className="set-box-name">{obj.title}</CardTitle>
                        <CardText className="set-box-title">{obj.description}</CardText>
                        <Button className="addToCart" onClick={() => {saveToCart(obj)}}>Добавить в корзину</Button>
                    </CardBody>
                </Card>
                <CartModal toggleModal={this.toggleModal} saveToCart={saveToCart} modal={modal} obj={obj}/>
            </div>
        )
    };
}

export default CartObj;