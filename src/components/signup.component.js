 import React, {Component} from 'react';
import axios from 'axios';
 export default class SignUp extends Component {

 	handleSubmit = e => {
 		e.preventDefault();
 		
 		const data = {
 			name: this.name,
 			email: this.email,
 			password: this.password
 		}
 		console.log(data);
 		axios.post('http://localhost:5000/api/users',data).then(
 			res=>{
 				console.log(res)
 			}).catch(
 				err =>{
 					console.log(err);
 				})

 	};





  render() {
    return(
    	<div>
    	<form onSubmit={this.handleSubmit}>
    	      <h3>Sign Up</h3>
    	       <div className="from-group">
    	       <label>Name</label>
            <input type="text" className="form-control" placeholder="Name"
             onChange={e => this.name = e.target.value}/>
            </div>
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