import React, { Component } from 'react'
import {login} from './UserFunctions'

class Login extends Component {
  constructor(){
    super()

    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.Submit.bind(this)
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = e => {
    e.preventDefault()

    const User = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if(res){
        this.props.history.push('/profile')
      }
    })
  }
  render(){
    return (
      <div>
        <div>
          <div>
            <form noValidate onSubmit={this.onSubmit}>
              <h1>Please sign in</h1>
              <div>
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.onChange} ></input>
              </div>
              <div>
                <label>Password</label>
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