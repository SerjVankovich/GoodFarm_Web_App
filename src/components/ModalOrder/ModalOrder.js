import React from "react";
import { ModalBody, ModalHeader, Form, FormGroup, Label, Input, FormFeedback, ModalFooter, Button, Modal } from "reactstrap";

const ModalOrder = ({ user, validation, toggleModal, changeUser, modal }) => {
        console.log(validation);
        const handleChange = event => simpleHandle(event, changeUser);
        return (
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggleModal}>Оформить заказ</ModalHeader>
                <ModalBody>
                    <Form method="post">
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input valid={validation.email} invalid={!validation.email} value={user.email} onChange={handleChange} type="email" id="emailInput" name="email" placeholder="Email" />
                            <FormFeedback invalid={!validation.email}>Invalid email</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input valid={validation.phone} invalid={!validation.phone} onChange={handleChange} value={user.phone} type="phone" id="phone" name="phone" placeholder="+7-(999)-999-99-99" />
                            <FormFeedback invalid={!validation.phone}>Invalid phone</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input valid={validation.name} invalid={!validation.name} value={user.name} onChange={handleChange} type="name" id="name" name="name" placeholder="Name" />
                            <FormFeedback invalid={!validation.name}>Invalid name</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input valid={validation.city} invalid={!validation.city} value={user.city} onChange={handleChange} type="name" id="city" name="city" placeholder="City" />
                            <FormFeedback invalid={!validation.city}>Invalid city</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="street">Street</Label>
                            <Input valid={validation.street} invalid={!validation.street} value={user.street} onChange={handleChange} type="name" id="street" name="street" placeholder="Street" />
                            <FormFeedback invalid={!validation.street}>Invalid street</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input valid={validation.house} invalid={!validation.house} value={user.house} onChange={handleChange} type="name" id="house" name="house" placeholder="House" />
                            <FormFeedback invalid={!validation.house}>Invalid house</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input valid={validation.flat} invalid={!validation.flat} value={user.flat} onChange={handleChange} type="number" id="flat" name="flat" placeholder="Flat" />
                            <FormFeedback invalid={!validation.flat}>Invalid flat</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Input value={user.floor} onChange={handleChange} type="number" id="floor" name="floor" placeholder="Floor" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="comment">Comment</Label>
                            <Input value={user.comment} onChange={handleChange} type="textarea" id="comment" name="comment" placeholder="Comment" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter> <Button className="completeOrder" color="warning" onClick={() => { console.log(user)} }>Оформить заказ</Button></ModalFooter>
            </Modal>
        )
};

const simpleHandle = (event, cb) => {
    const { name, value } = event.target;
    return cb(name, value)
};

const sendOrder = (user, cb) => {
    //TODO send order to api
};

export default ModalOrder;