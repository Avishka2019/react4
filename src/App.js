import React, { Component, Suspense  } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import axios from 'axios';

 import "shards-ui/dist/css/shards.min.css";
 import './style/md/css/bootstrap.css';
import Post from  "./components/post.component";
import Home from  "./components/home.component";
import Product from  "./components/product.component";
//import Login from  "./components/login.component";
import BootstrapModal from  "./components/reactbootstrap.component";
const Login = React.lazy(() => import('./components/login.component'));

import {
  BrowserRouter,
  Switch,
  Route

} from "react-router-dom";

//import {BrowserRouter, Route, Switch ,useParams} from "react-router-dom";
//import Update from  "./components/update.component";
 //import axios from 'axios';


export default class App extends Component{
 
render(){
   
        return (
          <BrowserRouter>


          <Switch>
         
           
            <Route exact path="/" component={Home}/>
          <Route exact path="/product" component={Product}/>
             <Route exact path="/login" component={Login}/>
            <Route path="/post/:id" component={Post} />
          </Switch>
          
         
        </BrowserRouter>
        );
    }
  }





