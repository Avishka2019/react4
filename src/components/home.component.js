
 import React, {Component} from 'react';
  import {Link} from "react-router-dom";
 import axios from 'axios';
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
 Button
} from "shards-react";




 const api = axios.create({
    baseURL: `http://localhost:5000/`,
    headers: {
      'x-auth-token': localStorage.getItem('token')
    }

})

 export default class Home extends Component {
    state = {
        products : [],
        }

constructor() {
        super();
       // this.check();
        this.getProducts();  
    }

      getProducts = async () => {
        let data = await api.get('/products').then(({data}) =>
        data);
        this.setState({products: data})
        console.log(data);
    }

      render() {
   
    return (
      <div>
      <h1>home</h1>
      <div>
      <div className="card-deck">
  
      {this.state.products.map(product=><div key={product._id}>

      <Card style={{ width: "300px", margin: "10px" }}>
      
      <CardImg src="https://place-hold.it/300x200" />
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <p>{product.price}</p>
        <Link to={'/post/'+product._id}  className="nav-link">
        <Button>Read more &rarr;</Button>
        </Link>


      </CardBody>
      
    </Card>


      </div>)}

    </div>
    </div>
      </div>
      )
  }
 }
 
