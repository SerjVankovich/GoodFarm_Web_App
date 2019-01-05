import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import CartItem from "../Cart/CartItem";
import {withRouter} from "react-router-dom";
import ModalOrder from "../../presentable/ModalOrder";

export default withRouter(function ({ items, addMore, minusOne, deleteOne, toggleModal }) {
    return (
        <div>
            <h1 className="header">Корзина</h1>
            <Container className="table">
                <Row>
                    {items.map((item, index) => (
                        <Col md="4" sm="6" xs="12" key={index}>
                            <CartItem addMore={addMore} minusOne={minusOne} deleteOne={deleteOne} set={item} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Button className="completeOrder" color="warning" onClick={() => toggleModal()}>Оформить заказ</Button>
                    <div className="sumPrice">Общая цена: {items.reduce((sum, item) => sum + item.price * item.count, 0)}</div>
                </Row>
            </Container>
            <ModalOrder/>
        </div>
    )
});


