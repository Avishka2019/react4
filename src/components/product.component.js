
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
//import './style/md/css/bootstrap.css';
import {  Button, Modal, ModalBody, ModalHeader,  FormInput } from "shards-react";


import axios from 'axios'

const api = axios.create({
    baseURL: `https://avishka-dev.herokuapp.com`,
    headers: {
    	'x-auth-token': localStorage.getItem('token')
    }

})

 export default class product extends Component {

    state = {
        courses : [],
        name: '',
        nameR:'',
        update: '',
        up: [],
        up2: [],
        
        
    }
    handleChange = event => {
        this.setState({name: event.target.value});
        
    }

       addPrice = event => {
        this.setState({price: event.target.value});
       
    }
     updateName = event => {
        this.setState({updateName: event.target.value});
       
    }

       updatePrice = event => {
        this.setState({updatePrice: event.target.value});
       
    }
     
     
/*
    handleSubmit = event => {
     event.preventDefault();
        axios.post('http://localhost:5000/products',{name: this.state.name, price: 777})
        console.log(this.state.name)
        this.getCouses();
      
    } 
*/

    constructor(props) {
        super(props);
        this.updatePrice = this.updatePrice.bind(this)
      this.updateCourse = this.updateCourse.bind(this)
  // this.state = { open: false };
    this.toggle = this.toggle.bind(this);
     this.toggle2 = this.toggle2.bind(this); 
       this.getCouses();
    }
    getCouses = async () => {
        let data = await api.get('/products').then(({data}) =>
        data);
        this.setState({courses: data})
        console.log(data);
    }

    createCourse = async (event) => {
      console.log(this.state.price)
      console.log(this.state.name)
       if (this.state.name === '' && typeof(this.state.name) ==='undefined' )
        {
           console.log("ok")
    }else{
       console.log("nope")
     
        event.preventDefault();
          let res =  await api.post('/products',{name: this.state.name, price: this.state.price})
    console.log(res)
    }
    

    //console.log(this.state.name);
    
   // console.log(this.state.img);
      
       
    
    //this.mainInput1.value = "";
    this.toggle2();
    //this.mainInput.value = "";
     this.setState({name: "",price:""});
    this.getCouses();
    }

    
    deleteCourse = async(id) => {
         await api.delete(`products/delete/${id}`);
          this.getCouses();
      }

    
      updateCourse = async(id) => {
        this.setState({
      open: !this.state.open
    });

        
        	await api.put(`products/update/${id}`,{name:this.state.updateName, price: this.state.updatePrice});
        	//this.setState({updateName: "",updatePrice:""});

       
  
        //id.preventDefault();
         
        // this.setState({gg: ""});
        //this.mainInputd.value = "";
         
        console.log(this.state.update)
        console.log(this.state.up2)
        this.getCouses(); 
           
    }
    /*
    gg = async() => {
        this.setState({update: ""});
        this.setState({name: ""});
    }
*/
 toggle = async(id) => {
    this.setState({
      open: !this.state.open

    });
  
    
    /*this.setState({
      name: data.name
    });*/
   // this.setState({up: data.name})

   if (id !== 'kk' && typeof(id) !=='undefined') {
         let data = await api.get(`products/${id}`).then(({data}) =>
        data);
         this.setState({up: data.name,up2: data._id,up3: data.price})

   //console.log(data.name);
  } else {
         console.log('Undefined or Null')

}
   

  
  }

  rtr(nm) {

    this.setState({
      open2: !this.state.open2
    });
    console.log(this.state.open2)
    console.log(nm);
}

 toggle2 = async(kk) => {
  console.log(kk);
  this.setState({
      open2: !this.state.open2,
      nameR:''
    });
  //console.log(this.state.open2);
  }



   render() {
    const { open } = this.state;
    return (
          <div>
          <Button onClick={()=>this.rtr('nm')}>Add Product</Button>
           <Modal  open={this.state.open2} toggle={this.toggle2} >
          <ModalHeader>Header<Button className="jj" onClick={()=>this.toggle2('kk')}>x</Button></ModalHeader>
          <ModalBody>
          <label htmlFor="username">name</label>
          <FormInput  
              placeholder="My form input"  onChange={this.handleChange}
              />
          <label htmlFor="username">price</label>
          <FormInput  type="number" 
          placeholder="Enter Your product Price"  onChange={this.addPrice}
          />
          

        <Button onClick={this.createCourse}>Sumbit</Button>

          
          </ModalBody>
        </Modal>
      
        
   <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    
  

     


{this.state.courses.map(course=><tr key={course._id}>
        
  <th scope="row">1</th>
      <td> {course.name}</td>
      <td>{course.price}</td>
      <td><Button onClick={()=>this.toggle(course._id)}>Update</Button></td>
       <td><button className="btn btn-danger"  onClick={()=> this.deleteCourse(course._id)}>x</button> </td>
            
      
     </tr>
   
      
    )}
  </tbody>
</table>
 <Modal open={open} toggle={this.toggle}>
          <ModalHeader>Header<Button className="jj" onClick={()=>this.toggle('kk')}>x</Button></ModalHeader>
          <ModalBody >
           <label htmlFor="username">name</label>
             <FormInput  
             ref="" key={this.state.up} defaultValue={this.state.up}  onChange={this.updateName}
              placeholder="My form input" />
               <label htmlFor="username">price</label>
              <FormInput type="text" 
             value={this.updatePrice}  onChange={this.updatePrice}
              placeholder="My form input" />
               <Button onClick={()=> this.updateCourse(this.state.up2)}>Sumbit</Button>
             </ModalBody>
        </Modal>
             </div>

    )
  }
}
