import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import CartItem from "../Cart/CartItem";
import {withRouter} from "react-router-dom";

export default withRouter(function ({ items, addMore, minusOne }) {
    return (
        <div>
            <h1 className="header">Корзина</h1>
            <Container className="table">
                <Row>
                    {items.map((item, index) => (
                        <Col md="4" sm="6" xs="12" key={index}>
                            <CartItem addMore={addMore} minusOne={minusOne} set={item} />
                        </Col>
                    ))}
                </Row>
                <Button className="completeOrder" color="warning">Оформить заказ</Button>
            </Container>
        </div>

    )
})

/*<ModalOrder form={form} validation={validation} toggleModal={this.toggleModal} handleComplete={this.handleComplete} open={modal} handleChange={this.handleChange}/>*/