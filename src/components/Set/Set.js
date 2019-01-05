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

import {encode} from '../../helpers/encoder'

const Set = ({ obj, toggleModal, saveToCart}) => {
        let imageUrl;
        if (obj.image) {
            imageUrl = "data:image/png;base64," + encode(obj.image.data);
        } else {
            imageUrl = ""
        }

        return (
            <div>
                <Card className="card" >
                    <CardImg className="img-rounded pointer" onClick={() => toggleModal(obj._id)} top width="100%" src={imageUrl} alt="Set image"/>
                    <CardBody>
                        <div className="set-box-price">{obj.price} руб.</div>
                        <CardTitle className="set-box-name">{obj.name}</CardTitle>
                        <CardText className="set-box-title">{obj.description}</CardText>
                        <Button className="addToCart" onClick={() => {saveToCart(obj)}}>Добавить в корзину</Button>
                    </CardBody>
                </Card>
                <Modal isOpen={obj.modal}>
                    <ModalHeader toggle={() => toggleModal(obj._id)}>{obj.name}</ModalHeader>
                    <div className="set-box-name">В набор входит:</div>
                    {obj.items.length !== 0 ?
                        <ModalBody>{obj.items.map((item, key) => (
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

                        :

                        <div>Ничего не входит (</div>
                    }

                    <Button className="addToCart" onClick={() => {
                        saveToCart(obj);
                        toggleModal(obj._id);
                    }}>Добавить в корзину</Button>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

export default Set;