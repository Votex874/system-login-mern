import React, { Component } from 'react'
import {login} from './UserFunctions'

class Login extends Component {
  constructor(){
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()
    console.log('klikniety')

    const user = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(user)
    // login(user).then(res => {
    //   if(res){
    //     this.props.history.push('/profile')
    //   }
    // })
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)

    })
      .then(response => console.log(response))
      .then(contents => console.log(contents))
      .catch((err) => console.log("error", err))
  }
  render(){
    return (
      <div>
        <div>
          <div>
            <form noValidate onSubmit={this.onSubmit}>
              <h1>Please sign in</h1>
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} ></input>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange} ></input>
              </div>
              <button type="submit" >Sign in</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login