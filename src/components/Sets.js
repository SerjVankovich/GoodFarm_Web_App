import React from 'react';
import Search from "./Search/Search";
import {Col, Container, Row} from 'reactstrap'
import {withRouter} from "react-router-dom";
import Loading from "./Loading/Loading";

class Sets extends React.Component {

    componentDidMount() {
        this.props.wantData("http://localhost:3000/sets");
    }

    render() {
        const {sets, isFetching, isFetched, component, saveToCart, toggleModal} = this.props;
        console.log(isFetching, isFetched, sets, this.props);
        return (
            <div>
                <Search findObjs={(name) => this.props.wantData(`http://localhost:3000/sets?name=${name}`)}/>
                <Container className="table">
                    {isFetching ?
                        <Loading/>
                        :
                        <Row>
                            {sets.map((obj, index) => (
                                <Col key={index} md="4" sm="6" xs="12">
                                    {React.createElement(component, {saveToCart: saveToCart, obj: obj, toggleModal: toggleModal}, this)}
                                </Col>
                            ))}
                        </Row>
                    }
                </Container>
            </div>
        )
    }
}

export default withRouter(Sets)