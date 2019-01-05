import React from 'react';
import {Card, CardBody, CardImg, CardTitle, CardText, Button, Row} from 'reactstrap';
import "./CartItem.css"

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            set: []
        };

        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
    }

    componentDidMount() {
        this.setState({
            set: this.props.set
        })
    }

    handlePlus() {
        const { set } = this.state;
        set.count++;
        this.setState({
            set: set
        });

        this.props.updateSets(set);
    }

    handleMinus() {
        const { set } = this.state;
        if (!(set.count === 1)) {
            set.count--;
            this.setState({
                set: set
            })
        }

        this.props.updateSets(set);
    }

    render() {
        const { addMore, minusOne, set, deleteOne } = this.props;
        return (
            <Card className="panel">
                <CardImg className="img-rounded" src="https://esh-derevenskoe.ru/image/cache/catalog/set/1-340x180.jpg" />
                <CardTitle className="set-box-name">{set.name}</CardTitle>
                <CardBody>
                    <Row>
                    <Button className={ (set.count !== 1) ? "btn-plus-minus" : "btn-delete" } color="warning" onClick={() => (set.count !== 1) ? minusOne(set._id) : deleteOne(set._id)}>{ (set.count !== 1) ? "-" : "del" }</Button>
                    <CardText className="count">
                        {set.count}
                    </CardText>
                    <Button className="btn-plus-minus" color="warning" onClick={() => addMore(set._id)}>+</Button>
                    <div className="set-box-price">{set.price * set.count} руб.</div>
                    </Row>
                    
                </CardBody>
            </Card>
        )
    }
}

export default CartItem;