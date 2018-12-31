import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingActionButton from './components/FAB/FAB';
import Set from './components/Set/Set';
import HomePage from './components/HomePage/HomePage';
import './index.css'
import CartObjs from "./components/CartObjs/CartObjs";
import CartObj from "./components/CartObj/CartObj";
import Sets from "./presentable/Sets";
import storeFactory from "./store/store";
import {Provider} from "react-redux";
import Cart from "./presentable/Cart";

const store = storeFactory();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
           <App/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/sets" component={
                    (props) => <Sets
                        {...props}
                        component={Set}
                        />
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
    </Provider>

    , document.getElementById('root'));

