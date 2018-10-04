import React from 'react';
import { withRouter } from 'react-router-dom'
import CartItem from './CartItem';
import './Cart.css'
import { createUser, updateUser } from '../../helpers/users'

import { Container, Col, Row, Button } from 'reactstrap';
import ModalOrder from "../ModalOrder/ModalOrder";

class Cart extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [],
            modal: false,
            form: {
                email: "",
                phone: "",
                name: "",
                city: "",
                street: "",
                house: "",
                flat: "",
                floor: "",
                comment: "",
            },
            validation: {
                phone: false,
                email: false,
                name: false,
                city: false,
                street: false,
                house: false,
                flat: false,
            }
        };

        this.updateSets = this.updateSets.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    componentDidMount() {
        const items = JSON.parse(localStorage.cartItems);
        const user = JSON.parse(localStorage.user);
        if (user) {
            const form = {
                email: user.email,
                phone: user.phone,
                name: user.name,
                city: user.city,
                street: user.street,
                house: user.house,
                flat: user.flat,
                floor: user.floor,
                comment: user.comment,
                price: user.price
            };
            this.setState({
                items: items,
                form: form,
                validation: {
                    phone: true,
                    email: true,
                    name: true,
                    city: true,
                    street: true,
                    house: true,
                    flat: true,
                }
            })
        } else {
            this.setState({
                items: items
            });
        }
        
    }

    componentWillUnmount() {
        localStorage.setItem('cartItems', JSON.stringify(this.state.items));
    }

    updateSets(set) {
        const { items } = this.state;

        items.forEach(item => {
            if (item._id === set._id) {
                item = set;
            }
        });

        this.setState({
            items: items
        });

    }


    toggleModal() {
        this.setState({
            modal: !this.state.modal
        })
    }

    handleComplete() {
        this.toggleModal();
        const [price, items] = this.calcSum(0, []);
        const { form } = this.state;

        form.price = price;
        form.items = items;

        const user = JSON.parse(localStorage.user);
        console.log(user);
        if (user === "undefined" || !user) {
            return createUser(form)
        } else {
            form["_id"] = user["_id"];
            updateUser(form)
        }
        this.setState({
            items: [],
            modal: false
        });
    }

    calcSum(price, items) {
        this.state.items.forEach(item => {
            price += (item.count * item.price);
            item = {
                name: item.name,
                description: item.description,
                price: item.price,
                count: item.count
            };
            items.push(item);
        });
        return [price, items];
    }

    static checkValue(value) {
        return value.length >= 1;

    }

    handleChange(event) {
        const child = event.target;
        const name = child.name;
        const value = child.value;
        const {form, validation} = this.state;
        form[name] = value;
        validation[name] = Cart.checkValue(value);

        this.setState({
            form: form
        })
    }


    render() {
        const { items, form, validation, modal } = this.state;

        if (items === null || items.length === 0) {
            return (
                <h1>Корзина пуста</h1>
            )
        }

        return (
            <div>
            <h1 className="header">Корзина</h1>
            <Container className="table">
                <Row>
                {items.map((item, index) => (
                    <Col md="4" sm="6" xs="12" key={index}>
                        <CartItem updateSets={this.updateSets} set={item} />
                    </Col>
                ))}
                </Row>
                <Button className="completeOrder" color="warning" onClick={this.toggleModal}>Оформить заказ</Button>
            </Container>
            <ModalOrder form={form} validation={validation} toggleModal={this.toggleModal} handleComplete={this.handleComplete} open={modal} handleChange={this.handleChange}/>
            
            
            
            </div>
            
        )
    }
}

export default withRouter(Cart)