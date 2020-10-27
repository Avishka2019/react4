import React, {Component} from 'react';
import axios from 'axios';
import { Alert } from "shards-react";

const api = axios.create({
    baseURL: `https://avishka-dev.herokuapp.com`,
    headers: {
    	'x-auth-token': localStorage.getItem('token')
    }

})


 export default class Post extends Component {


constructor(props) {
        super(props);
       // this.check();
       
        this.state = {
            id : this.props.match.params.id,
            name:'',
            price:'',
            error:''
        }
      
        this.getProducts();  
    }

   

    getProducts = async () => {
    	const id = this.props.match.params.id;
    	console.log(id)
      /* let data = await api.get(`/products/${id}`).then(({data}) =>
        data);
        this.setState({name: data.name, price: data.price})
        console.log(data.name);
*/
        	let data = await api.get(`/products/${id}`).then(
 			res=>{
 			console.log(res.data);
 			this.setState({name: res.data.name, price: res.data.price})
       
         			}).catch(
 				err =>{
 					console.log(err);
 				this.setState({error:"products is not find"})
 				})


    }




 	  render() {
   if (this.state.error) {
return (
 <Alert theme="danger">{this.state.error}</Alert>
 )
   }
    return (
    	<div>
      <h1>Product</h1>
 
     
     
      
  
    <h3>{this.state.error}</h3>   
  <h3>{this.state.name}</h3>
<h3>{this.state.price}</h3>      
   
  
      </div>
      )
}

 }


