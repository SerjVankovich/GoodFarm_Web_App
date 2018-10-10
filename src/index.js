import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingActionButton from './components/FAB/FAB';
import Set from './components/Set/Set';
import HomePage from './components/HomePage/HomePage';
import './index.css'
import Cart from './components/Cart/Cart';
import CartObjs from "./components/CartObjs/CartObjs";
import CartObj from "./components/CartObj/CartObj";


ReactDOM.render(
        <BrowserRouter>
        <div>
           <App/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/sets" component={
                    (props) => <CartObjs
                        {...props}
                        component={Set}
                        url={"sets"}/>
                } exact/>
                <Route path="/milk" component={
                    (props) => <CartObjs
                        {...props}
                        component={CartObj}
                        url={"milk"}/>
                } exact/>
                <Route path="/veges&fruits" component={
                    (props) => <CartObjs
                        {...props}
                        component={CartObj}
                        url={"vegFruits"}/>
                } exact/>
                <Route path="/cart" component={Cart} exact/>
            </Switch>
            <FloatingActionButton/>
        </div>
        </BrowserRouter>

    , document.getElementById('root'));

