 import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";
 export default class Login extends Component {
  state = {}
 	handleSubmit = e => {
 		e.preventDefault();
 		const { history } = this.props;
 		const data = {
 			
 			email: this.email,
 			password: this.password
 		}
 		console.log(data);
 		axios.post('http://localhost:5000/api/auth',data).then(
 			res=>{
 			console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        /*this.setState({
          loggedIn: true
        });*/
        //console.log(res)
        //this.props.setUser(res.data.name)
          
          
       this.props.history.push("/");
       window.location.reload();
         			}).catch(
 				err =>{
 					console.log(err);
 				})

 	};





  render() {

   /* if(this.state.loggedIn){
      return <Redirect to={'/'} />;
    }*/
    return(
    	<div>
    

    	<form onSubmit={this.handleSubmit} history={this.props.history}>
    	      <h3>Login Up</h3>
    	       
            <div className="from-group">
              <label>Email</label>
            <input type="email" className="form-control" placeholder="email"
             onChange={e => this.email = e.target.value}/>
            </div>
             <div className="from-group">
             <label>Password</label>
            <input type="Password" className="form-control" placeholder="email"
            onChange={e => this.password = e.target.value} />
            </div>
            <button className="btn btn-primary btn-block" onClick={this.check3}>Sign up</button>
            </form>

            </div>
     
      )

  }
 }