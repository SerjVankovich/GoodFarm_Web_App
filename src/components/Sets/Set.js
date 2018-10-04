import React from 'react';
import './Set.css';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from 'reactstrap';

class Set extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }
    encode(data) {
        const str = data.reduce(function(a,b){ return a+String.fromCharCode(b) },'');
        return btoa(str).replace(/.{76}(?=.)/g,'$&\n');
    }

    render() {
        const { set } = this.props;
        const imageUrl = "data:image/png;base64," + this.encode(set.image.data);
        console.log(imageUrl);

        return (
            <div>
                <Card className="card" >
                    <CardImg className="img-rounded pointer" onClick={this.toggleModal} top width="100%" src={imageUrl} alt="Set image"/>
                    <CardBody>
                        <div className="set-box-price">{set.price} руб.</div>
                        <CardTitle className="set-box-name">{set.name}</CardTitle>
                        <CardText className="set-box-title">{set.description}</CardText>
                        <Button className="addToCart" onClick={() => {this.props.saveToCart(set)}}>Добавить в корзину</Button>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader toggle={this.toggleModal}>{set.name}</ModalHeader>
                    <div className="set-box-name">В набор входит:</div>
                    <ModalBody>{set.items.map((item, key) => (
                        <Card className="panel" key={key}>
                            <CardImg className="img-rounded" src="https://esh-derevenskoe.ru/image/cache/catalog/product/1144/zd3a0260-550x455.jpg" alt="item_image" />
                            <CardTitle>
                                {item.name}
                            </CardTitle>
                            <CardBody>
                                <div className="set-box-name">{item.count}</div>
                            </CardBody>
                        </Card>
                    ))}</ModalBody>
                    <Button className="addToCart" onClick={() => {
                        this.props.saveToCart(set);
                        this.toggleModal();
                    }}>Добавить в корзину</Button>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
    

}

export default Set;