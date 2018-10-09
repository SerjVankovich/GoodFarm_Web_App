import React from 'react';
import './Milk.css';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
} from 'reactstrap';
import {encode} from '../../helpers/encoder'

const Milk = (props) => {
    const { obj: milk } = props;
    let imageUrl;
    if (milk.image) {
        imageUrl = "data:image/png;base64," + encode(milk.image.data);
        console.log(imageUrl);
    } else {
        imageUrl = ""
    }
    return (
        <div>
            <Card className="card" >
                <CardImg className="img-rounded pointer" onClick={this.toggleModal} top width="100%" src={imageUrl} alt="Set image"/>
                <CardBody>
                    <div className="set-box-price">{milk.price} руб.</div>
                    <CardTitle className="set-box-name">{milk.title}</CardTitle>
                    <CardText className="set-box-title">{milk.description}</CardText>
                    <Button className="addToCart" onClick={() => {this.props.saveToCart(milk)}}>Добавить в корзину</Button>
                </CardBody>
            </Card>
        </div>
    )
};

export default Milk;