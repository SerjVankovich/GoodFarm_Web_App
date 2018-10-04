import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import milk from "./imgs/milk.png"
import meat from"./imgs/meat.png"
import watermelon2 from "./imgs/watermelon2.png"
import bread from "./imgs/bread.png"
import ready from "./imgs/ready.png"
import psheno from "./imgs/psheno.png"
import {Collapse,
    Navbar,
  NavbarToggler,
  Nav,
  NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';

class App extends Component {
  constructor() {
    super();

    this.state = {
      collapse: false
    };

    this.collapse = this.collapse.bind(this)
  }

  collapse() {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render() {
    return (
      <div className="navbar-my">
        <Navbar fixed light expand='md'>
            <NavbarBrand>
                <Link to="/" className='brand'><img src={psheno} alt="psheno"/>GoodFarm</Link>
            </NavbarBrand>
          <NavbarToggler onClick={this.collapse} />
          <Collapse isOpen={this.state.collapse} navbar >
            <Nav pills className="ml-auto"  navbar>
              <NavItem >
                  <Link to="/sets" className="link"><img src={ready} alt="ready"/>Готовые наборы</Link>
              </NavItem>
                <NavItem>
                    <Link to="/milk" className="link"><img src={milk} alt="milk"/> Молочные продукты</Link>
                </NavItem>
                <NavItem>
                        <Link to="/meat&fish" className="link"><img src={meat} alt="meat"/> Мясо и рыба</Link>
                </NavItem>
                <NavItem>
                    <Link to="/veges&fruits" className="link"><img src={watermelon2} alt="watermelon"/>Овощи и фрукты</Link>
                </NavItem>
                <NavItem>
                    <Link to="/bread" className="link"><img src={bread} alt="bread"/>Хлеб</Link>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
