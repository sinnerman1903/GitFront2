import React, { Component } from 'react'
import Input from '../Components/Input'

import { signup } from '../Api/ApiCalls';

export default class UserSignupPage extends Component {
    state={
        username:null,
        nickname:null,
        password:null,
        passwordControl:null,
        repeatClick:false,
        errors:{}
    };

    onChangeFunc=(event)=>{
        const {name,value} = event.target;
    const errors ={...this.state.errors}
    errors[name] = undefined;
    this.setState({
          [name]:value,
          errors
        });
    }

    onClickSign= async (event)=>{
        event.preventDefault();

        const {username,nickname,password}= this.state
        const body ={
            username:username,
            nickname:nickname,
            password:password,
        }
        this.setState({repeatClick: true})

        try{
            const response = await signup(body)
            console.log(response);
        }catch(error){
           if(error.response.data.validationErrors){

                  this.setState({errors: error.response.data.validationErrors})
           }
        }
        this.setState({repeatClick: false})

    }
    

    render() {
        // state içindeki objeleri destructor ediyoruz.
        const {repeatClick, errors} = this.state;
        // errors içini de destructor ediyoruz.
        const {username, nickname, password}= errors;
        return (
            <div className="container" >
                 <form>
                 <h1 className="text-center">Sign Up</h1>
                 <Input name="username" label="Username:" error={username} onChance={this.onChangeFunc} />
                 <Input name="nickname" label="Nickname:" error={nickname} onChance={this.onChangeFunc} />
                 <Input name="password" label="Password:" error={password} onChance={this.onChangeFunc} type="password" />
                 
                  <div className="form-group">
                      <label>Password Check:</label>
                      <input className="form-control" name="passwordControl" type="password" onChange={this.onChangeFunc} />
                  </div>

                  <div >
                      <button
                      className="btn btn-primary" 
                      onClick={this.onClickSign}
                      disabled={repeatClick}
                      >
                        {repeatClick ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> : " "}
                        Sign Up
                      </button>
                  </div>
                 </form>
             </div>
        )
    }
}
