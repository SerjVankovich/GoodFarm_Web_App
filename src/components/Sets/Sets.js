import React from 'react';
import {withRouter} from 'react-router-dom';
import {Col, Container, Jumbotron, Row} from 'reactstrap'
import Set from './Set';
import "./Sets.css"
import Search from './Search'
import Loading from "../Loading/Loading";

class Sets extends React.Component {
    constructor() {
        super();
        
        this.cartItems = [];

        this.state = {
            sets: [],
            loading: true,
            cart: []
        };

        this.saveToCart = this.saveToCart.bind(this);
        this.checkSetOnCart = this.checkSetOnCart.bind(this);
        this.findSets = this.findSets.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:3000/sets')
        .then(response => response.json())
        .then(body => this.setState({
            sets: body,
            loading: false
        }))
        .catch(err => console.error(err));

        this.cartItems = JSON.parse(localStorage.getItem('cartItems'))

    }

    findSets(value) {
        fetch(`http://localhost:3000/sets?name=${value}`)
            .then(response => response.json())
            .then(body => {
                if (body.message === undefined) {
                    this.setState({ sets: body, loading: false })
                } else {
                    this.setState({ sets: [], loading: false})
                }


            })
            .catch(err => console.error(err))

    }

    saveToCart(set) {
        if(this.cartItems === null) {
            this.cartItems = []
        }
        if (!this.checkSetOnCart(set)) {
            set.count = 1;
            this.cartItems.push(set)
        }
        
    }

    checkSetOnCart(set) {
        return this.cartItems.some(cartItem => {
            return set._id === cartItem._id;
        })
    }

    componentWillUnmount() {
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems) )
    }

    render() {
        const { sets, loading } = this.state;
        if (!loading) {
            sets.forEach(set => console.log(set.image))
        }

        if (loading) {
            return (<Loading/>)
        }

        if (sets.length === 0) {
            return (
                <div>
                    <Search findSets={this.findSets}/>
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
                <Search findSets={this.findSets}/>
                <Container className="table">

                    {sets !== undefined &&
                    <Row>

                        {sets.map((set, index) => (
                            <Col key={index} md="4" sm="6" xs="12"> <Set saveToCart={this.saveToCart} set={set}/></Col>
                        ))}
                    </Row>}
                </Container>
            </div>

        )
    }
}

export default withRouter(Sets);