import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingActionButton from './components/FAB/FAB';
import Sets from './components/Sets/Sets';
import HomePage from './components/HomePage/HomePage';
import './index.css'
import Cart from './components/Cart/Cart';


ReactDOM.render(
        <BrowserRouter>
        <div>
           <App/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/sets" component={Sets} exact/>
                <Route path="/cart" component={Cart} exact/>
            </Switch>
            <FloatingActionButton/>
        </div>
        </BrowserRouter>

    , document.getElementById('root'));

