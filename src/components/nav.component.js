 import React, {Component} from 'react';
 import {Link} from "react-router-dom";
 export default class Nav extends Component {

 	handleLogout= () => {
 	localStorage.clear() 
 	this.props.setUser(null);
 	}

     render() {
     	let buttons

     		if(this.props.user){
     			buttons = (
  		<ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link  to={'/'} onClick={this.handleLogout} className="nav-link">logout</Link>
          </li>
          
          </ul>
          )

  		
  	}else{
  		buttons = (
  		<ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link  to={'/login'}  className="nav-link">login</Link>
          </li>
          <li className="nav-item">
          <Link to={'/signup'}  className="nav-link">sing Up</Link>
          </li>
          </ul>
          )
  	}
          return(
               
               <nav className="navbar navbar-expand navbar-light fixed-top">
          <div className="container">
          <Link className="navbar-brand" to={'/'}>home</Link>
          <div className="collapse navbar-collapse">
          {buttons}
          </div>
          </div>
          </nav>
         
               )

     }
 }
