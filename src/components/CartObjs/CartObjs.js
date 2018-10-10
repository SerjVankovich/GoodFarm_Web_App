import React from 'react';
import {withRouter} from 'react-router-dom';
import {Col, Container, Jumbotron, Row} from 'reactstrap'
import "./CartObjs.css"
import Search from '../Search/Search'
import Loading from "../Loading/Loading";

class CartObjs extends React.Component {
    constructor() {
        super();

        this.cartItems = [];

        this.state = {
            objs: [],
            loading: true,
            cart: [],
        };

        this.saveToCart = this.saveToCart.bind(this);
        this.checkObjOnCart = this.checkObjOnCart.bind(this);
        this.findObjs = this.findObjs.bind(this);
    }

    componentDidMount() {
        const { url } = this.props;
        fetch(`http://localhost:3000/${url}`)
            .then(response => response.json())
            .then(body =>
                this.setState({
                    objs: body,
                    loading: false
                })
            )
            .catch(err => console.error(err));
        const cartItems = localStorage.getItem('cartItems');

        if (cartItems.length !== 0) {
            this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
        }
    }

    findObjs(value) {
        const { url } = this.props;
        fetch(`http://localhost:3000/${url}?name=${value}`)
            .then(response => response.json())
            .then(body => {
                if (body.message === undefined) {
                    this.setState({ objs: body, loading: false })
                } else {
                    this.setState({ objs: [], loading: false})
                }


            })
            .catch(err => console.error(err))

    }

    saveToCart(obj) {
        if(this.cartItems === null) {
            this.cartItems = []
        }
        if (!this.checkObjOnCart(obj)) {
            obj.count = 1;
            this.cartItems.push(obj)
        }

    }

    checkObjOnCart(obj) {
        return this.cartItems.some(cartItem => {
            return obj._id === cartItem._id;
        })
    }

    componentWillUnmount() {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems) )
    }

    render() {
        const { objs, loading } = this.state;
        if (loading) {
            return (<Loading/>)
        }

        if (objs.length === 0) {
            return (
                <div>
                    <Search findObjs={this.findObjs}/>
                    <Container>
                        <Jumbotron className="NotFound">
                            <h2>Наборы не найдены :(</h2>

                        </Jumbotron>
                    </Container>

                </div>
            )
        }
        return (
            <div>
                <Search findObjs={this.findObjs}/>
                <Container className="table">

                    {objs !== undefined &&
                    <Row>
                        {objs.map((obj, index) => (
                            <Col key={index} md="4" sm="6" xs="12">
                                {React.createElement(this.props.component, {saveToCart: this.saveToCart, obj: obj }, this)}
                            </Col>
                        ))}
                    </Row>}
                </Container>
            </div>

        )
    }
}

export default withRouter(CartObjs);