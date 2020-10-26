import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import axios from 'axios';






 


 export default class Login extends Component {

    state = {
        
        name: '',
        login:'',
        error:'',
        

        
        
    };

     constructor() {
        super();
       // this.check();
        this.check2();

        
       
    }
 
      handleSubmit = async(e) => {
        e.preventDefault()
        const data = {
          email: this.email,
          password: this.password
        };
        console.log(data);
        try {
          const res = await axios.post('http://localhost:5000/api/auth',data)
          console.log(res.data)
        localStorage.setItem('token', res.data.token);
        const token =  localStorage.getItem('token');
        console.log(token)


          console.log(res.data.errors)
        // const er = res.data.errors[0].msg
        // console.log(typeof(res.data.errors))
          if (typeof(res.data.errors)!=='undefined') {
        this.setState({error:res.data.errors[0].msg})
        console.log(res.data.errors[0].msg);
      }
      // meka dammama mulinma sign page eka load wela eeth ekkama -->
      //token eka thiyenawanam athulata yanawa
      this.check();
        

        }catch(err)
        {
          console.error(err)
           //console.log(err.response.data.errors)
             //console.log(err.response.data.errors[0].msg)
             if (typeof(err.response.data.errors) !== 'undefined') {
            this.setState({error:err.response.data.errors[0].msg});
          }


        }
     
/*
      axios.post('http://localhost:5000/api/auth',data).then(res =>{
          console.log(res)

         localStorage.setItem('token', res.data.token);
        const token =  localStorage.getItem('token');
        console.log(token)
        
        //this.check(); 



        }
      ).catch(err => {
      // console.log(err);
       console.error(err);


        this.setState({error:"Please enter correct email"});
      })
*/




    }

     check = () =>
     {

      const config = {
        headers: {
          "x-auth-token": localStorage.getItem('token')
        }
      };
      const token =  localStorage.getItem('token');
      if (token !=="") {
    axios.get('http://localhost:5000/api/auth',

      config).then(res =>{
        console.log(res.data);
        console.log(res.data.name);
       //{name:this.state.updateName, price: this.state.updatePrice}
      this.setState({name: res.data.name,login:true});
    }).catch(err => {
       console.log(err);
      })
  }
      
     }

check2(){
const token =  localStorage.getItem('token');
if (token !==""&& token != null) {
console.log("ok");
console.log(token);

this.check();

}else{
console.log("no");

};
}

check3(){
 //const token = "";
  localStorage.clear();
   //this.setState({login:true});
  //this.check2();    
}

    render() {
        return (
            <div>
          

            { !this.state.login?<div>  
              <form onSubmit={this.handleSubmit}>
            <h3>Login up</h3>
          <span>{this.state.error}</span>
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
            <button className="btn btn-primary btn-block" >Sing Up</button>
          </form>
          </div>
            : 
          <div>
             
            <button className="btn btn-primary btn-block" onClick={this.check3}>Logout</button>
            <h3>{this.state.name} </h3>
           
          </div>}
            </div>
        );
    }
}

